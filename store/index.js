export const state = () =>
  ({
    info: { title: 'Useless Utilities Web App', short: 'UUWA' },
    utilities: [
      { name: 'Random Number Generator', id: 'rnd', icon: '/imgs/rnd.svg' },
      { name: 'IP Address & DNS', id: 'ip_dns', icon: '/imgs/ip_dns.svg' },
      { name: 'IP Address Calculator', id: 'ipcalc', icon: '/imgs/ipcalc.svg' },
      { name: 'Note utility', id: 'note', icon: '/imgs/note.svg' },
      { name: 'Calculator', id: 'calc', icon: '/imgs/calc.svg' }
    ]
  })
