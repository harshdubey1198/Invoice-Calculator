// SidebarData.js
export const sidebarData = [
    {
      label: 'Dashboard',
      icon: 'FaHome',
      link: '/',
      subItems: [
        { label: 'Overview', link: '/overview' },
        { label: 'Stats', link: '/stats' },
      ],
    },
    {
      label: 'Invoices',
      icon: 'FaFileInvoice',
      link: '/invoices',
      subItems: [
        { label: 'Pending', link: '/invoices/pending' },
        { label: 'Paid', link: '/invoices/paid' },
      ],
    },
    {
      label: 'Reports',
      icon: 'FaChartLine',
      link: '/reports',
    },
    {
      label: 'Settings',
      icon: 'FaCog',
      link: '/settings',
    },
  ];
  