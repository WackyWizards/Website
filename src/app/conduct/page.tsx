import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Code of Conduct',
  description:
    'Our Code of Conduct outlines our expectations for community participants and the consequences for unacceptable behavior.',
};

export default function CodeOfConduct() {
  return (
    <main className="min-h-screen bg-gray-900 py-16">
      <div className="relative mx-auto max-w-4xl px-6 md:px-10 pt-6 md:pt-10">
        <header className="mb-12 text-center border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Code of Conduct
          </h1>
          <p className="text-base sm:text-lg text-gray-400">Last Updated: April 30th, 2026</p>
        </header>

        <div className="max-w-none text-gray-300">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
            <p className="text-xl leading-relaxed text-gray-200">
              A primary goal of this community is to be inclusive to the largest number of people,
              with the most varied and diverse backgrounds possible. We are committed to providing a
              friendly, safe, and welcoming environment for all, regardless of gender, sexual
              orientation, ability, ethnicity, socioeconomic status, and religion (or lack thereof).
            </p>
          </div>

          {/* Purpose */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              Purpose
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <p>
                This Code of Conduct outlines our expectations for all those who participate in our
                community, as well as the consequences for unacceptable behavior. We invite all
                participants to help us create safe and positive experiences for everyone.
              </p>
              <p>
                A supplemental goal of this Code of Conduct is to increase responsible community
                participation by encouraging participants to recognize and strengthen the
                relationships between our actions and their effects on our community. Communities
                mirror the societies in which they exist, and positive action is essential to
                counteract the many forms of inequality and abuses of power that exist in society.
              </p>
              <p>
                If you see someone making an extra effort to ensure our community is welcoming,
                friendly, and encouraging to all participants - we want to know!
              </p>
            </div>
          </section>

          {/* Expected Behavior */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Expected Behavior
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="mb-4">The following behaviors are expected and requested of all community members:</p>
              <div className="grid gap-3">
                {[
                  'Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.',
                  'Exercise consideration and respect in your speech and actions.',
                  'Attempt collaboration before conflict.',
                  'Refrain from demeaning, discriminatory, or harassing behavior and speech.',
                  'Be mindful of your surroundings and of your fellow participants. Alert community moderators if you notice a dangerous situation, someone in distress, or violations of this Code of Conduct, even if they seem inconsequential.',
                  'Abide by the terms of service of any platform used by this community.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Unacceptable Behavior */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              Unacceptable Behavior
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="mb-4">
                The following behaviors are considered harassment and are unacceptable within our
                community:
              </p>
              <div className="grid gap-3">
                {[
                  'Violence, threats of violence, or violent language directed against another person.',
                  'Sexist, racist, homophobic, transphobic, ableist, or otherwise discriminatory jokes and language.',
                  'Posting or displaying sexually explicit or violent material.',
                  'Posting or threatening to post other people\'s personally identifying information ("doxing").',
                  'Personal insults, particularly those related to gender, sexual orientation, race, religion, or disability.',
                  'Inappropriate photography or recording.',
                  'Unwelcome sexual attention, including sexualized comments or jokes and unwelcome sexual advances.',
                  'Deliberate intimidation, stalking, or following (online or in person).',
                  'Sustained disruption of community events, including talks and presentations.',
                  'Advocating for, or encouraging, any of the above behavior.',
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-red-400 mr-3 mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Consequences */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              Consequences of Unacceptable Behavior
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
              <p>
                Unacceptable behavior from any community member, including sponsors and those with
                decision-making authority, will not be tolerated. Anyone asked to stop unacceptable
                behavior is expected to comply immediately.
              </p>
              <p>
                If a community member engages in unacceptable behavior, the staff team may take
                action following this tiered approach:
              </p>
              <div className="grid gap-4">
                {[
                  {
                    color: 'bg-yellow-500',
                    label: 'Warning',
                    desc: 'A formal notice that the behavior is unacceptable, with an explanation of why.',
                  },
                  {
                    color: 'bg-orange-500',
                    label: 'Temporary Restriction',
                    desc: 'Temporary suspension from community spaces or events.',
                  },
                  {
                    color: 'bg-red-500',
                    label: 'Permanent Ban',
                    desc: 'Permanent expulsion from the community without warning (and without refund in the case of a paid event or service).',
                  },
                ].map(({ color, label, desc }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-7 h-7 ${color} rounded-full flex items-center justify-center shrink-0 mt-0.5`}>
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-white">{label}:</span>
                      <span className="text-gray-300"> {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-orange-200">
                  <span className="font-semibold">Note:</span> Staff reserve the right to skip steps
                  and act immediately in cases of severe violations.
                </p>
              </div>
            </div>
          </section>

          {/* Reporting */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              Reporting
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <p>
                If you are subject to or witness unacceptable behavior, or have any other concerns,
                please contact the staff team as soon as possible. Please include as much detail as
                possible, such as screenshots or descriptions of the incident and any relevant
                context.
              </p>
              <div className="grid gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Email: </span>
                    <a
                      href="mailto:contact@wackywizards.org"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      contact@wackywizards.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Discord: </span>
                    <a
                      href="https://www.wackywizards.org/discord"
                      className="text-blue-400 hover:text-blue-300 underline transition-colors"
                    >
                      Support Server
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-200">
                  <span className="font-semibold">Response Time:</span> You can expect an
                  acknowledgment within 48 hours and a resolution or status update within 7 days.
                </p>
              </div>
              <p>
                Staff members are also available to help community members engage with local law
                enforcement or to otherwise help those experiencing unacceptable behavior feel safe.
              </p>
            </div>
          </section>

          {/* Appeals */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              Appeals
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <p>
                If you believe a moderation decision was made in error, you may appeal by emailing{' '}
                <a
                  href="mailto:contact@wackywizards.org"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  contact@wackywizards.org
                </a>{' '}
                with the subject line{' '}
                <span className="font-semibold text-white">&quot;Code of Conduct Appeal&quot;</span>
                . Appeals will be reviewed by a staff member not involved in the original decision.
              </p>
            </div>
          </section>

          {/* Scope */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-pink-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              Scope
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <p>
                This Code of Conduct applies in all community spaces, including but not limited to:
              </p>
              <div className="grid gap-3">
                {[
                  'Online platforms (chat servers, forums, social media, mailing lists)',
                  'Project repositories and issue trackers',
                  'Community events, meetups, and conferences (in-person or virtual)',
                  'One-on-one communications pertaining to community business',
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-pink-400 mr-3 mt-0.5">•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p>
                This Code of Conduct and its related procedures also apply to unacceptable behavior
                occurring outside the scope of community activities when such behavior has the
                potential to adversely affect the safety and well-being of community members.
              </p>
            </div>
          </section>

          {/* Review */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-amber-500 rounded-lg mr-3 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              Annual Review
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <p>
                This Code of Conduct is reviewed annually to ensure it remains relevant and
                effective. Community members are welcome to submit feedback or suggestions at any
                time to{' '}
                <a
                  href="mailto:contact@wackywizards.org"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  contact@wackywizards.org
                </a>
                .
              </p>
            </div>
          </section>

          {/* License */}
          <div className="border-t border-white/10 pt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <p className="text-sm text-gray-400 text-center">
                The Citizen Code of Conduct is distributed by Stumptown Syndicate under a Creative
                Commons Attribution-ShareAlike license. Portions of text derived from the Django
                Code of Conduct and the Geek Feminism Anti-Harassment Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
