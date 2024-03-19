export default class PlinkoResource {
  static RESOURCE = {
    ball: '/assets/plinko/ball.3981f8e7.png',
    pin: '/assets/plinko/pin.07d34b2f.png',
    pin_active: '/assets/plinko/pin_active.b1038ad3.png',
    target: '/assets/plinko/target.f3e8ae2a.png',
    tooltip: '/assets/plinko/tooltip.772bba85.png',
    arrow:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAeAgMAAAAN9pXcAAAADFBMVEUAAAD////29/v19voM4nzmAAAAA3RSTlMACr4sQLLfAAAAbklEQVQY023MoRGAMBQE0cNQAY5m0g6KVqgImkkTGECs2PwZzp3Yl/Ud1zOXf2S6hvu0ZB/+nRSgJ5lLHgBzAHMAcwDzAJgDmAOYA5gDmAOQC5ALkAuQC5ALkAuQC5ALkAuQC5ALnC1lW+qW/O8D/gHKSpbPJZcAAAAASUVORK5CYII=',
    star: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFaADAAQAAAABAAAAFQAAAAAIGxIOAAAB9ElEQVQ4Ea2VT2vUUBTF733mdVRQCiZiM6MiFKq4KLRQN7rwC0jdiDtduhF3bhWX7twJfhiRrkQdcFdBXNhJEGeE0kXrZF5zvDc04XUyzGSkb3P/5HdO7ryXZIgaLpeEDxuizTDXix5kvRAamylmUMByK0uiH2qqUesZEjKzAJfuPSXgWsFJLOoZIp52Hb32BUfD7yBaLDkR7AbUWuZO8qfsjcepkx5y9sI3VLHW2h838uvapEjjsy53qzD5Lc7ptZhYX6C5iEYw9Jxz8zEwwVeO032f4SwN1wW7TTnWhV4TwXWATvnQtJyZDuXG2/ITumT4iyVscZaEn6Uhxie0mLvG0sJ9mfDniViKjyW7WewpknjF0WgLQPS/5szcD8je4Xb6rToopOGaA72X/Tw/r7Hs617AdJfjQVe11SNVNAzdY+K/85gWvOqODI+ZamGXBh/kNq/mMVW+0HmiatKqBz5d5U2SCXzNFIyrTbxKBoQrZV7GminndaiEJ0VGfYiaKYhrk8rp5vKYfNI4bjyJP2YKvDRM6JRCOdkhsXkXgG7YzmBDo9ZF/whSXnWlRmP1nGqB/uV4NDxIpLlLzG8DS2/4Yv+XXvMXfkeX3IieyXf2ibz3i7Z1ps3RTuozVa5fdfnLeIT+yrmqOSVRTvjHwM0FH/sHXD22t71XYMgAAAAASUVORK5CYII=',
  };
  static LOADED = {};
  static PAYOUTS = {
    1: {
      8: [5.6, 2.1, 1.1, 1, 0.5, 1, 1.1, 2.1, 5.6],
      9: [5.6, 2, 1.6, 1, 0.7, 0.7, 1, 1.6, 2, 5.6],
      10: [8.9, 3, 1.4, 1.1, 1, 0.5, 1, 1.1, 1.4, 3, 8.9],
      11: [8.4, 3, 1.9, 1.3, 1, 0.7, 0.7, 1, 1.3, 1.9, 3, 8.4],
      12: [10, 3, 1.6, 1.4, 1.1, 1, 0.5, 1, 1.1, 1.4, 1.6, 3, 10],
      13: [8.1, 4, 3, 1.9, 1.2, 0.9, 0.7, 0.7, 0.9, 1.2, 1.9, 3, 4, 8.1],
      14: [7.1, 4, 1.9, 1.4, 1.3, 1.1, 1, 0.5, 1, 1.1, 1.3, 1.4, 1.9, 4, 7.1],
      15: [15, 8, 3, 2, 1.5, 1.1, 1, 0.7, 0.7, 1, 1.1, 1.5, 2, 3, 8, 15],
      16: [
        16, 9, 2, 1.4, 1.4, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.4, 1.4, 2, 9, 16,
      ],
    },
    2: {
      8: [13, 3, 1.3, 0.7, 0.4, 0.7, 1.3, 3, 13],
      9: [18, 4, 1.7, 0.9, 0.5, 0.5, 0.9, 1.7, 4, 18],
      10: [22, 5, 2, 1.4, 0.6, 0.4, 0.6, 1.4, 2, 5, 22],
      11: [24, 6, 3, 1.8, 0.7, 0.5, 0.5, 0.7, 1.8, 3, 6, 24],
      12: [33, 11, 4, 2, 1.1, 0.6, 0.3, 0.6, 1.1, 2, 4, 11, 33],
      13: [43, 13, 6, 3, 1.3, 0.7, 0.4, 0.4, 0.7, 1.3, 3, 6, 13, 43],
      14: [58, 15, 7, 4, 1.9, 1, 0.5, 0.2, 0.5, 1, 1.9, 4, 7, 15, 58],
      15: [88, 18, 11, 5, 3, 1.3, 0.5, 0.3, 0.3, 0.5, 1.3, 3, 5, 11, 18, 88],
      16: [110, 41, 10, 5, 3, 1.5, 1, 0.5, 0.3, 0.5, 1, 1.5, 3, 5, 10, 41, 110],
    },
    3: {
      8: [29, 4, 1.5, 0.3, 0.2, 0.3, 1.5, 4, 29],
      9: [43, 7, 2, 0.6, 0.2, 0.2, 0.6, 2, 7, 43],
      10: [76, 10, 3, 0.9, 0.3, 0.2, 0.3, 0.9, 3, 10, 76],
      11: [120, 14, 5.2, 1.4, 0.4, 0.2, 0.2, 0.4, 1.4, 5.2, 14, 120],
      12: [170, 24, 8.1, 2, 0.7, 0.2, 0.2, 0.2, 0.7, 2, 8.1, 24, 170],
      13: [260, 37, 11, 4, 1, 0.2, 0.2, 0.2, 0.2, 1, 4, 11, 37, 260],
      14: [420, 56, 18, 5, 1.9, 0.3, 0.2, 0.2, 0.2, 0.3, 1.9, 5, 18, 56, 420],
      15: [620, 83, 27, 8, 3, 0.5, 0.2, 0.2, 0.2, 0.2, 0.5, 3, 8, 27, 83, 620],
      16: [
        1e3, 130, 26, 9, 4, 2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 4, 9, 26, 130, 1e3,
      ],
    },
  };
  static startColor = 16760833;
  static endColor = 16000088;
  static interpolateColor = (t) => {
    const startRGB = [
      PlinkoResource.startColor >> 16,
      (PlinkoResource.startColor >> 8) & 255,
      255 & PlinkoResource.startColor,
    ];
    const endRGB = [PlinkoResource.endColor >> 16, (PlinkoResource.endColor >> 8) & 255, 255 & PlinkoResource.endColor];
    const diffRGB = [
      endRGB[0] - startRGB[0],
      endRGB[1] - startRGB[1],
      endRGB[2] - startRGB[2],
    ];
    return (
      PlinkoResource.startColor +
      ((t * diffRGB[0]) << 16) +
      ((t * diffRGB[1]) << 8) +
      diffRGB[2]
    );
  };
  static rgbToHex(rgb) {
    const hex = Number(rgb).toString(16);
    if (hex.length < 6) {
      hex = "0".repeat(6 - hex.length) + hex;
    }
    return `#${hex}`;
  }

  static interpolateColorToHex = (t) => {
    return PlinkoResource.rgbToHex(PlinkoResource.interpolateColor(t));
  }
}
