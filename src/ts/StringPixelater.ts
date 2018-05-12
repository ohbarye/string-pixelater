interface StringPixelaterOptions {
  fontSize: number;
  fontName: string;
  transpose: boolean;
}

const DEFALUT_OPTIONS = {
  fontSize: 12,
  fontName: "'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic'",
  transpose: false,
}

export default class StringPixelater {
  private str: string;
  private options: StringPixelaterOptions;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  public static pixelate(str: string, options: any = {}): Array<Array<any>> {
    const instance = new StringPixelater(str, options);
    return instance.pixelate();
  }

  constructor(str: string, options: any = {}) {
    this.str = str;
    this.options = {
      ...DEFALUT_OPTIONS,
      ...options
    };
    this.canvas = <HTMLCanvasElement> document.createElement('canvas');
    this.context = <CanvasRenderingContext2D> this.canvas.getContext('2d');

    if(!str) {
      new TypeError('You must provide at least 1 character.')
      return;
    }
    if(!this.context) {
      console.warn('canvas is not available in this environment.')
      return;
    }

    this.canvas.height = Math.ceil(this.options.fontSize * 1.5); // To take margin to render ascenders/descenders
    this.context.font  = this.fontStyle; // Set font before measuring width
    this.canvas.width  = Math.ceil(this.context.measureText(this.str).width);
    this.context.font  = this.fontStyle; // Need to reset font after setting width
    this.context.textBaseline = "top";
    this.context.fillText(this.str, 0, 0); // render text
  }

  private pixelate(): Array<Array<any>> {
    let table = new Array(this.canvas.height);

    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

    let topRow = 0;
    let bottomRow = 0;

    for (let row = 0; row < this.canvas.height; row++){
      table[row] = new Array(this.canvas.width);

      for (let col = 0; col < this.canvas.width; col++){
        const alpha = imageData.data[(this.canvas.width * row + col) * 4 + 3];
        if (alpha >= 64) {
          table[row][col] = 1;
          // Note row number
          if (topRow === 0) topRow = row;
          if (bottomRow < row) bottomRow = row;
        } else {
          table[row][col] = 0;
        }
      }
    }

    table = this.options.transpose ? this.transpose(table) : table;
    return this.removeMargin(table, topRow, bottomRow);
  }

  private get fontStyle(): string {
    return `${this.options.fontSize}px ${this.options.fontName}`
  }

  private transpose(table: Array<Array<any>>): Array<Array<any>> {
    return table[0].map((col: any, i: number) => {
      return table.map((row: Array<any>) => row[i])
    })
  }

  private removeMargin(table: Array<Array<any>>, topRow: number, bottomRow: number): Array<Array<any>> {
    if  (this.options.transpose) {
      return table.map((row: any) => row.slice(topRow, bottomRow + 1))
    } else {
      return table.slice(topRow, bottomRow + 1)
    }
  }
}
