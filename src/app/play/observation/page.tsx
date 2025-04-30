"use client";

import { useState } from "react";

export default function GameLauncher() {
    const game: string = "observation";
    const gamesLocation: string = "/#games";
    const [status, setStatus] = useState<"idle" | "launching" | "success" | "error">("idle");

    const isValidGame = game === "hangout" || game === "observation";

    function launchGame() {
        if (!isValidGame) {
            setStatus("error");
            return;
        }

        setStatus("launching");

        try {
            window.location.href = `steam://run/590830//-rungame spoonstuff.${game}`;

            const fallbackTimeout = setTimeout(() => {
                if (document.visibilityState === "visible") {
                    setStatus("idle");
                }
            }, 2000);

            function handleVisibilityChange() {
                if (document.visibilityState === "hidden") {
                    clearTimeout(fallbackTimeout);
                    setStatus("success");
                }
            }

            document.addEventListener("visibilitychange", handleVisibilityChange, { once: true });
        } catch {
            setStatus("error");
        }
    }

    function goBackToGames() {
        window.location.href = gamesLocation;
    }

    const statusText = {
        idle: "Click the button below to launch the game.",
        launching: "Launching the game...",
        success: "Game is starting...",
        error: "Failed to launch the game. Please ensure Steam and S&Box are installed and try again.",
    };

    const statusColor = {
        idle: "text-gray-300",
        launching: "text-yellow-400",
        success: "text-green-400",
        error: "text-red-400",
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4">
            <div className="flex flex-col text-center max-w-lg w-full bg-gray-950/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-800">
                <h1 className="text-4xl font-bold mb-6">Game Launcher</h1>
                <p className={`text-xl font-medium mb-4 ${statusColor[status]}`}>
                    {statusText[status]}
                </p>

                {status === "idle" && isValidGame && (
                    <button
                        onClick={launchGame}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-colors shadow-lg mb-4"
                    >
                        Launch {game}
                    </button>
                )}

                {!isValidGame && (
                    <p className="text-red-400 font-medium mb-4">Invalid game selected.</p>
                )}

                {status === "idle" && isValidGame && (
                    <button
                        onClick={goBackToGames}
                        className="bg-gray-700 hover:bg-gray-800 text-white px-5 py-2 rounded-full text-base font-medium transition-colors"
                    >
                        Back to Games
                    </button>
                )
                }
            </div>
        </div>
    );
}
