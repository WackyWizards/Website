"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
    FaPlus, 
    FaGithub, 
    FaGitlab, 
    FaYoutube, 
    FaTwitch, 
    FaInstagram, 
    FaTiktok, 
    FaReddit, 
    FaFacebook, 
    FaLinkedin, 
    FaSteam, 
    FaTwitter, 
    FaPatreon, 
    FaGlobe } from "react-icons/fa";
import { SiBluesky, SiKofi } from "react-icons/si";

type TeamMember = {
    name: string,
    role: string,
    avatar: string,
    socialLinks?: SocialLink[],
    messages: Message[]
}

type Message = {
    message: string;
    weight: number;
}

type SocialLink = {
    media: SocialMedia;
    url: string;
};

enum SocialMedia {
    Website = "Website",
    GitHub = "GitHub",
    GitLab = "GitLab",
    YouTube = "YouTube",
    Twitch = "Twitch",
    Instagram = "Instagram",
    TikTok = "TikTok",
    Reddit = "Reddit",
    Facebook = "Facebook",
    LinkedIn = "LinkedIn",
    Steam = "Steam",
    Twitter = "Twitter",
    Bluesky = "Bluesky",
    Patreon = "Patreon",
    KoFi = "Ko-Fi",
}

type SocialMediaIcon = {
    [key in SocialMedia]: React.ComponentType<{ size?: number }>;
};

// Social media icon mapping
const socialIcons: SocialMediaIcon ={
    [SocialMedia.Website]: FaGlobe,
    [SocialMedia.GitHub]: FaGithub,
    [SocialMedia.GitLab]: FaGitlab,
    [SocialMedia.YouTube]: FaYoutube,
    [SocialMedia.Twitch]: FaTwitch,
    [SocialMedia.Instagram]: FaInstagram,
    [SocialMedia.TikTok]: FaTiktok,
    [SocialMedia.Reddit]: FaReddit,
    [SocialMedia.Facebook]: FaFacebook,
    [SocialMedia.LinkedIn]: FaLinkedin,
    [SocialMedia.Steam]: FaSteam,
    [SocialMedia.Twitter]: FaTwitter,
    [SocialMedia.Bluesky]: SiBluesky,
    [SocialMedia.Patreon]: FaPatreon,
    [SocialMedia.KoFi]: SiKofi,
};

const teamMembers: TeamMember[] = [
    {
        name: "kEllie",
        role: "Founder & Lead Programmer",
        avatar: "/kEllieDev.jpg",
        socialLinks: [
            { media: SocialMedia.GitHub, url: "https://github.com/kEllieDev" },
            { media: SocialMedia.Bluesky, url: "https://bsky.app/profile/kelliedev.bsky.social" },
            { media: SocialMedia.Twitch, url: "https://twitch.tv/kelliedev" },
            { media: SocialMedia.KoFi, url: "https://ko-fi.com/kelliedev" },
        ],
        messages: [
            { message: "It feels like I'm in a dream!", weight: 1 },
            { message: "Go play <a style='border-bottom: 1px solid black;' href='https://store.steampowered.com/app/1973530/Limbus_Company/' target='_blank' rel='noopener noreferrer'>Limbus Company!</a> It's peak fiction!", weight: 0.2 },
            { message: "Beep Boop!", weight: 1 },
            { message: "99% of gamblers quit right before they make it big!", weight: 1 },
            { message: "Sometimes, I dream about cheese.", weight: 1 }
        ]
    },
    {
        name: "Alex Downer",
        role: "Programmer, Game Designer, Mathematician",
        avatar: "/AlexDowner.png",
        socialLinks: [],
        messages: [
            { message: "Stop clicking me!", weight: 1 },
            { message: "What year is it again?", weight: 1 },
            { message: "Programmer is lingo for dark arts user", weight: 1 },
            { message: "Cringe is best", weight: 1 },
            { message: "42! Of course!", weight: 1 },
            { message: "<- I help this one with their math homework", weight: 1 },
            { message: "Where am I?!", weight: 1 },
            { message: "Congrats, you've got malware now!", weight: 1 },
            { message: "They made me do this...", weight: 1 }
        ]
    },
    {
        name: "AWildErin",
        role: "Programmer",
        avatar: "/AWildErin.gif",
        socialLinks: [],
        messages: []
    },
    {
        name: "Dutchy42",
        role: "Programmer",
        avatar: "/Dutchy42.png",
        socialLinks: [],
        messages: []
    },
    {
        name: "SharpMars",
        role: "Programmer",
        avatar: "/pumpkin_mars.png",
        socialLinks: [],
        messages: []
    },
    {
        name: "Tameranian",
        role: "3D Artist",
        avatar: "/Tameranian.jpg",
        socialLinks: [],
        messages: []
    },
];

type BubbleMessage = {
    memberName: string;
    message: string;
};

/**
 * Select a message based on weight.
 * @param messages Messages with their associated weights.
 * @returns A randomly selected message.
 */
function selectWeightedMessage(messages: { message: string, weight: number }[]): string {
    // If there are no messages, return a default one
    if (messages.length === 0) {
        return "Hello!";
    }

    const totalWeight = messages.reduce((sum, msg) => sum + msg.weight, 0);
    let random = Math.random() * totalWeight;

    for (const msg of messages) {
        random -= msg.weight;
        if (random <= 0) {
            return msg.message;
        }
    }

    // Fallback
    return messages[0].message;
}

export default function Team() {
    const [activeBubble, setActiveBubble] = useState<BubbleMessage | null>(null);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    // Clear timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    const handleMemberClick = (member: TeamMember) => {
        // Clear existing timeout
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const selectedMessage = selectWeightedMessage(member.messages);
        setActiveBubble({ memberName: member.name, message: selectedMessage });

        // Set new timeout and store its ID
        const newTimeoutId = setTimeout(() => {
            setActiveBubble(null);
            setTimeoutId(null);
        }, 3000);

        setTimeoutId(newTimeoutId);
    };

    return (
        <section id="team" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl w-full">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Our Team</h2>
                    <p className="text-base sm:text-lg text-gray-400">Meet the crew!</p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center relative">
                            {/* Speech Bubble */}
                            {activeBubble?.memberName === member.name && (
                                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
                                    <div
                                        className="relative bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-xs sm:text-sm whitespace-nowrap max-w-[12rem] sm:max-w-none animate-bubble origin-center transition-all duration-300"
                                        dangerouslySetInnerHTML={{ __html: activeBubble.message }}
                                    />
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                                </div>
                            )}
                            
                            {/* Avatar */}
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gray-700 overflow-hidden mb-3 sm:mb-4 relative ring-3 ring-gray-800 hover:ring-blue-500 transition-all duration-400 cursor-pointer"
                                onClick={() => handleMemberClick(member)}
                            >
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            
                            {/* Name */}
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
                                {member.name}
                            </h3>
                            
                            {/* Role */}
                            <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed px-1 mb-2">
                                {member.role}
                            </p>

                            {/* Social Links */}
                            {member.socialLinks && member.socialLinks.length > 0 && (
                                <div className="flex gap-2">
                                    {member.socialLinks.map((link, index) => {
                                        const IconComponent = socialIcons[link.media] || FaGlobe;
                                        return (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200 hover:scale-110 transform"
                                                title={link.media}
                                            >
                                                <IconComponent size={16} />
                                            </a>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Join Us */}
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full border-2 border-dashed border-gray-600 flex items-center justify-center hover:bg-gray-800 hover:border-blue-500 transition-all duration-300 cursor-pointer mb-3 sm:mb-4 group"
                            onClick={() => (window.location.href = "/apply")}
                        >
                            <FaPlus className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-1 sm:mb-2">You?</h3>
                        <div className="space-y-0.5 sm:space-y-1">
                            <p className="text-xs sm:text-sm text-gray-500 italic leading-tight">
                                Think you would be a good fit?
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500 italic leading-tight">
                                We would love to hear from you!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 mb-3 text-center text-gray-400">
                    <p className="text-sm sm:text-base">
                        Click on a team member to see what they have to say!
                    </p>
                </div>
            </div>
        </section>
    );
}