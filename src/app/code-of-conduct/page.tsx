import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Code Of Conduct',
  description: 'Read our community code of conduct!',
};

export default function CodeOfConduct() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white py-16">
        <div className="mx-auto px-6 md:px-10 pt-6 md:pt-10 text-black">
          <header className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">Code Of Conduct</h1>
            <p className="mt-2 text-gray-600">Last Updated: July 4th, 2025</p>
          </header>

          <div className="prose prose-gray max-w-none">
            <p>
              Our goal is to foster an inclusive, welcoming, and safe community for people of all
              backgrounds. We value diversity and are committed to ensuring everyone can participate
              free from harassment or discrimination.
            </p>
            <p>
              This Code of Conduct outlines expectations for behavior, outlines unacceptable
              conduct, and explains our enforcement policies. We encourage all participants to help
              us make this a positive and respectful environment.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Expected Behavior</h2>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Participate authentically and actively to support the community.</li>
              <li>Be considerate and respectful in speech and actions.</li>
              <li>Collaborate before engaging in conflict.</li>
              <li>Avoid demeaning, discriminatory, or harassing language or behavior.</li>
              <li>Be aware of your surroundings and report any concerns or violations.</li>
              <li>Respect that our spaces may be shared with the public; act accordingly.</li>
              <li>
                Follow the <a href="https://discord.com/terms">Discord Terms of Service</a> if
                participating in our server.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
              2. Unacceptable Behavior
            </h2>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Violence or threats of violence against others.</li>
              <li>
                Discriminatory jokes, language, or behavior targeting protected characteristics.
              </li>
              <li>Posting sexually explicit or violent material.</li>
              <li>Doxxing: sharing someone’s personal information without consent.</li>
              <li>Personal insults, especially those related to identity or background.</li>
              <li>Unwelcome sexual attention or advances.</li>
              <li>Deliberate intimidation, stalking, or following others.</li>
              <li>Disrupting events or community activities.</li>
              <li>Encouraging or promoting any of the above behavior.</li>
              <li>Continuing unwanted interactions after being asked to stop.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
              3. Consequences Of Unacceptable Behavior
            </h2>
            <p>
              Unacceptable behavior from any community member, including sponsors and those with
              decision-making authority, will not be tolerated. Anyone asked to stop unacceptable
              behavior is expected to comply immediately. If a community member engages in
              unacceptable behavior, the staff team may take any action they deem appropriate, up to
              and including a temporary ban or permanent expulsion from the community without
              warning (and without refund in the case of a paid event or service). If you are
              subject to or witness unacceptable behavior, or have any other concerns, please notify
              a staff member as soon as possible. Additionally, staff members are available to help
              community members engage with local law enforcement or to otherwise help those
              experiencing unacceptable behavior feel safe.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Scope</h2>
            <p>
              We expect all community participants (contributors, paid or otherwise; sponsors; and
              other guests) to abide by this Code of Conduct in all community venues--online and
              in-person--as well as in all one-on-one communications pertaining to community
              business. This code of conduct and its related procedures also applies to unacceptable
              behavior occurring outside the scope of community activities when such behavior has
              the potential to adversely affect the safety and well-being of community members.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
              5. License and Attribution
            </h2>
            <p>
              The Citizen Code of Conduct is distributed by Stumptown Syndicate under a Creative
              Commons Attribution-ShareAlike license. Portions of text derived from the Django Code
              of Conduct and the Geek Feminism Anti-Harassment Policy.
            </p>
            <p className="text-sm text-gray-600">
              Questions or concerns? Email us at{' '}
              <a href="mailto:contact.kuo.team@gmail.com">contact.kuo.team@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
