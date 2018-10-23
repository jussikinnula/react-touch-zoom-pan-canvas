import * as React from 'react'
import { translate, scale, transformedPoint } from './utils'

interface Props {
  width: number
  height: number
  onAnimationFrame: (ctx: CanvasRenderingContext2D, time: number) => void
  getContext: (ctx: CanvasRenderingContext2D) => void
}

export class Canvas extends React.Component<Props, {}> {
  canvas: HTMLCanvasElement = null
  ctx: CanvasRenderingContext2D = null
  matrix: DOMMatrix = null
  requestAnimationFrameId: number = null

  componentDidMount() {
    this.requestAnimationFrameId = requestAnimationFrame(this._onAnimationFrame)
    window.addEventListener('resize', this._updateDimensions)
  }

  componentDidUpdate() {
    this._updateDimensions()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestAnimationFrameId)
    window.removeEventListener('resize', this._updateDimensions)
  }

  _setupCanvas = (node: HTMLCanvasElement) => {
    const { getContext } = this.props
    this.canvas = node
    this.ctx = this.canvas.getContext('2d')
    if (getContext) getContext(this.ctx)
    this._updateDimensions()
  }

  _updateDimensions = () => {
    const { width = 640, height = 480 } = this.props
    this.canvas.width = width
    this.canvas.height = height
    this.canvas.style.display = 'block'
    this.canvas.style.margin = '0px'
    this.canvas.style.padding = '0px'
    this.canvas.style.width = `${width}px`
    this.canvas.style.height = `${height}px`
  }

  _onAnimationFrame = (time: number) => {
    const { onAnimationFrame } = this.props
    if (!this.canvas || !onAnimationFrame) return

    // Clear visible area of the canvas
    const p1 = transformedPoint(0, 0)
    const p2 = transformedPoint(this.canvas.width, this.canvas.height)
    this.ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y)

    // Call callback
    onAnimationFrame(this.ctx, time)

    // Loop
    this.requestAnimationFrameId = requestAnimationFrame(this._onAnimationFrame)
  }

  translate(x: number, y: number) {
    translate(x, y)
    this.ctx.translate(x, y)
  }

  scale(x: number, y: number) {
    scale(x, y)
    this.ctx.scale(x, y)
  }

  render() {
    const { width, height, onAnimationFrame, getContext, ...props } = this.props
    return <canvas ref={this._setupCanvas} {...props} />
  }
}