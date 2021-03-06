
import { initMixin } from './init'
import { loadMixin } from './load'
import { selectMixin } from './select'

function Pika9(options) {
  if (!window || !document) {
    throw new Error('make sure you running Pika9.js in bowser')
  }

  if (!this instanceof Pika9) {
    return new Pika9(options)
  }

  this._init(options)
}

initMixin(Pika9)
loadMixin(Pika9)
selectMixin(Pika9)

export default Pika9
