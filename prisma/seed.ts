import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const issues = [
    {
      title: 'Login page not loading',
      description: 'Users are reporting that the login page fails to load after clicking the sign-in button.',
      status: Status.OPEN,
    },
    {
      title: 'Profile picture upload broken',
      description: 'When users try to upload profile pictures, they get a 500 server error.',
      status: Status.IN_PROGRESS,
    },
    {
      title: 'Mobile menu not closing',
      description: 'On mobile devices, the navigation menu stays open after selecting an item.',
      status: Status.OPEN,
    },
    {
      title: 'Password reset emails not sending',
      description: 'The system is not sending password reset emails to users who request them.',
      status: Status.OPEN,
    },
    {
      title: 'Dashboard performance issues',
      description: 'Dashboard takes more than 10 seconds to load when user has many projects.',
      status: Status.IN_PROGRESS
    },
    {
      title: 'Incorrect date formatting',
      description: 'Dates are showing in US format (MM/DD/YYYY) even when user has different locale set.',
      status: Status.OPEN,
    },
    {
      title: 'API rate limiting too aggressive',
      description: 'Users are getting rate limited after just 5 requests in a minute.',
      status: Status.CLOSED,
    },
    {
      title: 'Broken link in footer',
      description: 'The "Terms of Service" link in footer redirects to 404 page.',
      status: Status.OPEN,
    },
    {
      title: 'Missing validation on signup form',
      description: 'The signup form accepts obviously fake email addresses like "test@test".',
      status: Status.IN_PROGRESS,
    },
    {
      title: 'Dark mode toggle not persistent',
      description: 'When refreshing page, dark mode preference is not saved.',
      status: Status.OPEN,
    },
    {
      title: 'Search results inaccurate',
      description: 'Search is returning irrelevant results for precise queries.',
      status: Status.OPEN,
    },
    {
      title: 'Notification bell not updating',
      description: 'The notification indicator doesn\'t update until page refresh.',
      status: Status.CLOSED,
    },
    {
      title: 'PDF export missing data',
      description: 'The PDF export feature is missing the last two columns of data tables.',
      status: Status.OPEN,
    },
    {
      title: 'Timezone conversion error',
      description: 'Calendar events show up 1 hour early during daylight savings time.',
      status: Status.IN_PROGRESS,
    },
    {
      title: 'Memory leak in admin panel',
      description: 'After using admin panel for 30+ minutes, browser memory usage spikes to 2GB+.',
      status: Status.OPEN,
    },
    {
      title: 'Inaccessible color contrast',
      description: 'Light gray text on white background fails WCAG contrast requirements.',
      status: Status.OPEN,
    },
    {
      title: 'Duplicate API requests',
      description: 'The frontend is sending duplicate API requests on page load.',
      status: Status.CLOSED,
    },
    {
      title: 'Broken image upload in Safari',
      description: 'Users report image upload fails specifically in Safari browser.',
      status: Status.OPEN,
    },
    {
      title: 'Missing error message on failed login',
      description: 'When login fails, no error message is shown to the user.',
      status: Status.IN_PROGRESS,
    },
    {
      title: 'Export to CSV includes hidden columns',
      description: 'The CSV export includes columns that are hidden in the UI.',
      status: Status.OPEN,
    },
  ];

  for (const issue of issues) {
    await prisma.issue.create({
      data: issue,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });