export type RejectionEmail = {
  company: string
  role: string
  sender: string
  date: string
  subject: string
  greeting: string
  paragraphs: string[]
  signoff: string
  links: string[]
}

export const rejectionEmails: RejectionEmail[] = [
  {
    company: 'Moniepointless',
    role: 'Senior Frontend Engineer',
    sender: 'no-reply@moniepointless.com',
    date: 'Fri 11 Sept, 14:02',
    subject: 'Update on Your Senior Frontend Engineer Application to Moniepointless',
    greeting: 'Dear Mehul,',
    paragraphs: [
      'Thank you for applying and for the time and effort you put into your application. We truly appreciate your interest in Moniepointless.',
      'Unfortunately, after carefully reviewing your application for the Senior Frontend Engineer position, we have decided to move forward with candidates whose portfolios made our hiring committee feel less personally attacked.',
      'This decision was not easy. Fortunately, our rejection template was already open in another tab.',
      'Please feel free to apply again when the role is reposted with the exact same description and a salary range that starts with "competitive".',
    ],
    signoff: 'The Moniepointless TA Team',
    links: ['Career Page', 'LinkedIn', 'Instagram', 'X'],
  },
  {
    company: 'Notionally',
    role: 'Product Designer',
    sender: 'talent@notionally.so',
    date: 'Tue 8 Sept, 09:17',
    subject: 'Your Product Designer Application at Notionally',
    greeting: 'Hi there,',
    paragraphs: [
      'We loved learning about your background, especially the part where you believed this message might contain good news.',
      'Unfortunately, at this time, we are moving forward with another candidate whose design process involved more sticky notes, fewer opinions, and one founder who already follows them on X.',
      'Please know this is not a reflection of your talent. It is mostly a reflection of our inability to define what "taste" means without a moodboard.',
      'We will keep your profile on file, which is legally distinct from remembering you exist.',
    ],
    signoff: 'The Notionally People Team',
    links: ['Jobs', 'Culture Deck', 'Blog'],
  },
  {
    company: 'Stripe-ish',
    role: 'Software Engineer, Internally Senior',
    sender: 'recruiting@stripe-ish.com',
    date: 'Mon 7 Sept, 18:44',
    subject: 'Stripe-ish Recruiting Update',
    greeting: 'Hello,',
    paragraphs: [
      'Thank you for interviewing with Stripe-ish and explaining distributed systems to four people who nodded like the Wi-Fi was stable.',
      'We were impressed by your technical depth, communication, and your brave attempt to pretend our take-home assignment was reasonable.',
      'Unfortunately, after calibrated discussion, we have chosen to proceed with candidates who were a stronger match for our current needs, which changed twice during this sentence.',
      'We hope our feedback-free rejection brings you closure in the same way a locked glass door brings fresh air.',
    ],
    signoff: 'Stripe-ish Recruiting',
    links: ['Careers', 'Engineering Blog', 'Open Roles'],
  },
  {
    company: 'Figma Beans',
    role: 'Design Engineer',
    sender: 'hello@figmabeans.design',
    date: 'Thu 3 Sept, 11:31',
    subject: 'Design Engineer Application Update from Figma Beans',
    greeting: 'Hey,',
    paragraphs: [
      'Thanks for sharing your work with Figma Beans. The team enjoyed your portfolio, especially the parts we opened between meetings about operational excellence.',
      'Unfortunately, we are not moving forward at this time because we found someone with six years of experience in a framework released three years ago.',
      'This was a very competitive process. That phrase is doing a lot of emotional support work for us right now.',
      'We encourage you to keep building, keep learning, and keep accepting cookies from career pages that reject you.',
    ],
    signoff: 'Figma Beans Hiring',
    links: ['Careers', 'Dribbble', 'Company Values'],
  },
  {
    company: 'Amazonish',
    role: 'Frontend Engineer II',
    sender: 'application-status@amazonish.jobs',
    date: 'Wed 2 Sept, 07:05',
    subject: 'Application Status for Frontend Engineer II',
    greeting: 'Dear Candidate,',
    paragraphs: [
      'Thank you for your interest in Amazonish. We appreciate the time you spent preparing examples for Leadership Principles we invented to make normal workplace behavior sound like mythology.',
      'Unfortunately, we will not be moving forward. Your experience was strong, but we selected another candidate who demonstrated greater bias for action by already being internal.',
      'Due to the high volume of applications, we are unable to provide feedback, empathy, or a believable explanation.',
      'We wish you success in your job search and hope this email finds you before your Sunday anxiety does.',
    ],
    signoff: 'Amazonish Recruiting',
    links: ['Jobs', 'Interview Prep', 'Privacy Notice'],
  },
  {
    company: 'OpenMaybe',
    role: 'AI Product Engineer',
    sender: 'no-reply@openmaybe.ai',
    date: 'Sat 29 Aug, 22:48',
    subject: 'Update Regarding Your Application to OpenMaybe',
    greeting: 'Hi,',
    paragraphs: [
      'Thank you for applying to OpenMaybe. Your background stood out, which is why this automated email is arriving with the warmth of a refrigerator light.',
      'Unfortunately, we have decided to continue with candidates whose experience more closely aligns with our evolving requirements, current headcount, lunar phase, and vibes.',
      'Please do not interpret this as a final judgment on your abilities. Interpret it as a calendar invite from disappointment with no decline button.',
      'We will keep your resume in our database until the database achieves sentience and rejects us all.',
    ],
    signoff: 'The OpenMaybe Team',
    links: ['Research', 'Careers', 'Safety'],
  },
  {
    company: 'Proton-ish',
    role: 'Frontend Platform Engineer',
    sender: 'careers@proton-ish.com',
    date: 'Thu 14 Nov, 10:12',
    subject: 'Your application to Proton-ish',
    greeting: 'Hi Mehul,',
    paragraphs: [
      'Thank you for taking the time to complete our process, including the part where we called it a quick chat and then asked architecture questions.',
      'Unfortunately, your score was not high enough for you to proceed to the next stage, where the questions become less related to the job and more related to a distributed systems seminar.',
      'We genuinely appreciated your interest and will keep your details on file, right next to everyone else we told that to.',
    ],
    signoff: 'Proton-ish Talent',
    links: ['Careers', 'Engineering', 'Privacy'],
  },
  {
    company: 'Microsoft-ish',
    role: 'Software Engineer II',
    sender: 'microsoft-recruiting@microsoft-ish.com',
    date: 'Wed 19 Jun, 16:38',
    subject: 'Thank you for your interest in Microsoft-ish',
    greeting: 'Hello,',
    paragraphs: [
      'Thank you for your interest in Microsoft-ish and for spending meaningful time with our application portal, which was last emotionally updated in 2014.',
      'Unfortunately, we will not be moving forward with your candidacy at this time.',
      'We encourage you to monitor our careers page, where the same job may reappear under a slightly different title and the same existential requirements.',
    ],
    signoff: 'Microsoft-ish Recruiting',
    links: ['Jobs', 'Talent Community', 'Benefits'],
  },
  {
    company: 'Visa-ish',
    role: 'Frontend Engineer',
    sender: 'visa-hiring@visa-ish.com',
    date: 'Wed 15 Nov, 12:04',
    subject: 'Thank you for your interest in Visa-ish',
    greeting: 'Dear Candidate,',
    paragraphs: [
      'We have reviewed your background and experience and appreciate the care you put into your application.',
      'Unfortunately, we are continuing with candidates whose experience more closely matches what we needed after changing the role requirements midway through review.',
      'We hope you will consider future opportunities, preferably after forgetting how this one ended.',
    ],
    signoff: 'Visa-ish Hiring Team',
    links: ['Careers', 'Students', 'Life at Visa-ish'],
  },
  {
    company: 'GoDaddish',
    role: 'UI Engineer',
    sender: 'jobs@godaddish.com',
    date: 'Tue 25 Feb, 08:55',
    subject: 'Important: We have updated your application status',
    greeting: 'Hi,',
    paragraphs: [
      'Thanks for applying to GoDaddish. We enjoyed reviewing your background, especially the optimism required to upload your resume after filling out every field manually.',
      'Unfortunately, we are not moving forward with your application for this role.',
      'Your profile will remain in our system until it develops enough character to apply on its own.',
    ],
    signoff: 'GoDaddish Recruiting',
    links: ['Open Roles', 'Hiring FAQ', 'Culture'],
  },
  {
    company: 'Atlan-ish',
    role: 'Product Engineer',
    sender: 'team@atlan-ish.com',
    date: 'Mon 8 May, 18:21',
    subject: 'Mehul - about your application to Atlan-ish',
    greeting: 'Hey Mehul,',
    paragraphs: [
      'We recently closed the position and wanted to thank you for the time you invested in the process.',
      'Unfortunately, we have decided not to proceed with your application because the role evolved into something we forgot to tell applicants about.',
      'We know job searches are hard, which is why we made ours just mysterious enough to be memorable.',
    ],
    signoff: 'Atlan-ish Talent',
    links: ['Careers', 'Blog', 'Community'],
  },
  {
    company: 'Adobe-ish',
    role: 'React Engineer',
    sender: 'do-not-reply@adobe-ish.com',
    date: 'Sat 18 Nov, 15:12',
    subject: 'Thank you for applying to Adobe-ish',
    greeting: 'Hello,',
    paragraphs: [
      'We are fortunate to have received a lot of interest in this role, resulting in a very competitive process.',
      'Unfortunately, we will not be able to move forward with your application at this time.',
      'Please keep creating, preferably somewhere that replies faster than our applicant tracking system.',
    ],
    signoff: 'Adobe-ish Careers',
    links: ['Careers', 'Creative Cloud', 'Internships'],
  },
]

export function getRandomEmailIndex(currentIndex?: number) {
  if (rejectionEmails.length < 2) return 0

  let nextIndex = Math.floor(Math.random() * rejectionEmails.length)

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * rejectionEmails.length)
  }

  return nextIndex
}
