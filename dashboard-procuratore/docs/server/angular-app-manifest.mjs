
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/dashboard-procuratore/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard-procuratore/dashboard",
    "route": "/dashboard-procuratore"
  },
  {
    "renderMode": 2,
    "route": "/dashboard-procuratore/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/dashboard-procuratore/players"
  },
  {
    "renderMode": 0,
    "route": "/dashboard-procuratore/player/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1327, hash: '1bcf832761053c0426764346ab0d631d7e5366a456d05b805c21fc1cba2294c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1384, hash: '5a814283b21a9aea1f17d163f59957a9ffe716b8bf2dec3ff26789cdcb65bfdb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'players/index.html': {size: 4840, hash: '16a8d665c292db8944a896b2bd67a21bfda467b73e45dd60914bcbf73c865ee7', text: () => import('./assets-chunks/players_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 5844, hash: '4f7feea9241096380809ffaefb44f344e247097bed97e6a33461343d6970ce9d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-SCLHNCTE.css': {size: 75210, hash: 'EecGECri8kM', text: () => import('./assets-chunks/styles-SCLHNCTE_css.mjs').then(m => m.default)}
  },
};
