import Image from "next/image";

const STICKERS = [
  {
    src: "/assets/sticker/sticker-1.png",
    top: "4%",
    left: "5%",
    rotate: -12,
    size: 180,
    opacity: 0.18,
  },
  {
    src: "/assets/sticker/sticker-1.png",
    top: "4%",
    left: "80%",
    rotate: -12,
    size: 180,
    opacity: 0.18,
  },
  {
    src: "/assets/sticker/sticker-3.png",
    top: "18%",
    right: "-3%",
    rotate: 8,
    size: 160,
    opacity: 0.15,
  },
  {
    src: "/assets/sticker/sticker-2.png",
    top: "38%",
    left: "-2%",
    rotate: -6,
    size: 150,
    opacity: 0.16,
  },
  {
    src: "/assets/sticker/sticker-5.png",
    top: "55%",
    right: "-4%",
    rotate: 14,
    size: 170,
    opacity: 0.14,
  },
  {
    src: "/assets/sticker/sticker-4.png",
    top: "72%",
    left: "1%",
    rotate: -10,
    size: 155,
    opacity: 0.15,
  },
  {
    src: "/assets/sticker/sticker-1.png",
    top: "88%",
    right: "-2%",
    rotate: 5,
    size: 145,
    opacity: 0.13,
  },
  {
    src: "/assets/sticker/sticker-3.png",
    top: "62%",
    left: "50%",
    rotate: -8,
    size: 130,
    opacity: 0.1,
  },
] as const;

export function StickerLayer() {
    return (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
            {STICKERS.map((s, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: s.top,
                        left: "left" in s ? s.left : undefined,
                        right: "right" in s ? s.right : undefined,
                        transform: `rotate(${s.rotate}deg)`,
                        opacity: s.opacity,
                    }}
                >
                    <Image
                        src={s.src}
                        width={s.size}
                        height={s.size}
                        alt=""
                        className="object-contain"
                    />
                </div>
            ))}
        </div>
    );
}
