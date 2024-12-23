// Config settings
// Настройки конфига
import gulp from 'gulp'
import path from './gulp/config/path.js'
import server from './gulp/config/server.js'
import plugins from './gulp/config/plugins.js'

// Global object
// Глобальний обьект
global.config = {
  path, gulp, plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build')
}

// Tasks
// Задачи
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { html } from './gulp/tasks/html.js'
import { sass } from './gulp/tasks/sass.js'
import { js } from './gulp/tasks/javascript.js'
import { img } from './gulp/tasks/images.js'
import { svg } from './gulp/tasks/svg.js'
import { zip } from './gulp/tasks/zip.js'
import { otf_ttf, ttf_woff, font } from './gulp/tasks/fonts.js'

// Observer autorefresh
// Наблюдатель автообновление
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.images, img)
  gulp.watch(path.watch.svg, svg)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.sass, sass)
  gulp.watch(path.watch.js, js)
}

// Combine tasks
// Сортировка задач
const observer = gulp.parallel(watcher, server)
const fonts = gulp.series(otf_ttf, ttf_woff, font)
const tasks = gulp.series(fonts, gulp.parallel(copy, html, sass, js, img, svg))

// Scenarios
// Сценарии
const dev = gulp.series(clean, tasks, observer)
const build = gulp.series(clean, tasks)
const archive = gulp.series(clean, tasks, zip)

// Export scenarios
// Отправка сценариев
export { dev }
export { build }
export { archive }



