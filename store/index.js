export const state = () =>
  ({
    info: { title: 'Useless Utilities Web App', short: 'UUWA' },
    utilities: [
      { shortname: 'RNG', name: 'Random Number Generator', id: 'rnd', icon: '/imgs/rnd.svg' },
      { shortname: 'IP & DNS', name: 'IP Address & DNS', id: 'ip_dns', icon: '/imgs/ip_dns.svg' },
      { shortname: 'IP Calc', name: 'IP Address Calculator', id: 'ipcalc', icon: '/imgs/ipcalc.svg' },
      { shortname: 'Note', name: 'Note utility', id: 'note', icon: '/imgs/note.svg' },
      { shortname: 'Calc', name: 'Calculator', id: 'calc', icon: '/imgs/calc.svg' }
    ]
  })
