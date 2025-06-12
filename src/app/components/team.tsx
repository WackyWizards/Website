"use client";

import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

type TeamMember = {
    name: string,
    role: string,
    image: string
}

const teamMembers: TeamMember[] = [
    {
        name: "kEllie",
        role: "Founder & Lead Programmer",
        image: "/kEllieDev.jpg",
    },
    {
        name: "Alex Downer",
        role: "Programmer, Game Designer, Mathematician",
        image: "/AlexDowner.png",
    },
    {
        name: "AWildErin",
        role: "Programmer",
        image: "/AWildErin.gif",
    },
    {
        name: "Dutchy42",
        role: "Programmer",
        image: "/Dutchy42.png",
    },
    {
        name: "SharpMars",
        role: "Programmer",
        image: "/pumpkin_mars.png",
    },
    {
        name: "Tameranian",
        role: "3D Artist",
        image: "/tameranian.jpg",
    },
];


export default function Team() {
    return (
        <section
            id="team"
            className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-20"
        >
            <div className="max-w-6xl w-full">
                <h2 className="text-5xl font-bold text-center">Our Team</h2>
                <p className="text-lg text-center text-gray-400 mt-4">
                    Meet the crew!
                </p>

                <div className="grid grid-cols-4 md:grid-cols-4 gap-10 mt-12">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center">
                            <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden mb-4 relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold">{member.name}</h3>
                            <p className="text-gray-400">{member.role}</p>
                        </div>
                    ))}

                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-32 h-32 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center hover:bg-gray-800 transition cursor-pointer mb-4"
                            onClick={() => (location.href = "/apply")}
                        >
                            <FaPlus className="text-4xl text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-semibold">You?</h3>
                        <p className="text-gray-500 italic text-sm">Think you would be a good fit?</p>
                        <p className="text-gray-500 italic text-sm">We would love to hear from you!</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
