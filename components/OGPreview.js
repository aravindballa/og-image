import Color from 'color';
import Head from 'next/head';
import HeadFonts from './HeadFonts';

const images = {
  substack: (
    <img
      className="w-[300px] h-auto"
      src="/substack.png"
      alt="substack"
      width={300}
      height={51.6}
    />
  ),
  revue: (
    <img
      className="w-[300px] h-auto"
      src="/revue.png"
      alt="ghost"
      width={480}
      height={196}
    />
  ),
  ghost: (
    <img
      className="w-[300px] h-auto"
      src="/ghost.png"
      alt="ghost"
      width={300}
      height={110.25}
    />
  ),
  webflow: (
    <img
      className="w-[300px] h-auto"
      src="/webflow.png"
      alt="webflow"
      width={809}
      height={204}
    />
  ),
  wordpress: (
    <img
      className="w-[300px] h-auto"
      src="/wordpress.png"
      alt="wordpress"
      width={946.79}
      height={196.23}
    />
  ),
  carrd: (
    <img
      className="w-[300px] h-auto"
      src="/carrd.png"
      alt="carrd"
      width={440}
      height={141.91}
    />
  ),
  notion: (
    <img
      className="w-[180px] h-auto"
      src="/notion.png"
      alt="notion"
      width={512}
      height={512}
    />
  ),
  mdxone: (
    <img
      className="w-[300px] h-auto"
      src="/mdxone.png"
      alt="mdxone"
      width={120}
      height={25}
    />
  ),
  potion: (
    <img
      className="w-[300px] h-auto"
      src="/potion.png"
      alt="potion"
      width={200}
      height={62}
    />
  ),
  float: (
    <img
      className="w-[300px] h-auto"
      src="/float.png"
      alt="float"
      width={204}
      height={78}
    />
  ),
  super: (
    <img
      className="w-[300px] h-auto"
      src="/super.png"
      alt="super"
      width={400}
      height={120}
    />
  ),
};

const OGPreview = ({
  title,
  newsletter = 'substack',
  website = 'ghost',
  background_color = 'white',
}) => {
  const c = Color(background_color);
  const colors = c.isDark()
    ? { title: c.lightness(95), meta: c.lightness(90) }
    : { title: c.lightness(10), meta: c.lightness(20) };

  return (
    <div
      id="preview"
      className="text-base w-[300px] h-[156px] md:text-2xl md:w-[450px] md:h-[234px] lg:text-3xl lg:w-[1200px] lg:h-[628px]"
      style={{ backgroundColor: background_color }}
    >
      <Head>
        <HeadFonts />
      </Head>
      <div className="relative w-full max-w-full h-full">
        <div className="absolute hidden sm:block top-4 left-16 h-1/2 w-1/2 rounded-full bg-orange-300 mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute hidden sm:block top-16 left-40 h-2/3 w-2/3 rounded-full bg-yellow-300 mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute hidden sm:block top-8 left-72 h-1/3 w-1/3 rounded-full bg-red-300 mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="relative w-full h-full flex flex-col items-center justify-between px-16 py-24 font-serif">
          <div className="flex items-center space-x-8">
            {images[newsletter]}
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9378 3.51455L23.3872 4.89263C24.1213 4.12054 24.1213 2.90856 23.3872 2.13647L21.9378 3.51455ZM13.4575 12.434L12.008 11.0559C11.2588 11.8439 11.2764 13.0861 12.0476 13.8526L13.4575 12.434ZM21.2487 2.78983L22.6982 1.41175C22.3206 1.01464 21.7967 0.789826 21.2487 0.789825C20.7008 0.789825 20.1768 1.01464 19.7993 1.41175L21.2487 2.78983ZM12.7489 11.7298L11.3391 13.1483C11.7207 13.5277 12.2392 13.7372 12.7772 13.7296C13.3153 13.722 13.8276 13.4979 14.1984 13.1079L12.7489 11.7298ZM4.01312 3.04725L5.423 1.62872C5.03439 1.24247 4.50432 1.03257 3.95662 1.04805C3.40893 1.06353 2.89156 1.30303 2.52538 1.71061L4.01312 3.04725ZM3.3448 3.79112L1.85706 2.45448C1.14502 3.24701 1.17926 4.4586 1.93492 5.20965L3.3448 3.79112ZM12.0606 12.4538L13.5101 13.8319C14.2592 13.0439 14.2417 11.8017 13.4705 11.0353L12.0606 12.4538ZM2.91138 22.0769L1.46193 20.6988C0.727859 21.4709 0.72786 22.6828 1.46193 23.4549L2.91138 22.0769ZM3.60042 22.8016L2.15097 24.1797C2.52852 24.5768 3.05247 24.8016 3.60042 24.8016C4.14836 24.8016 4.67231 24.5768 5.04986 24.1797L3.60042 22.8016ZM12.7691 13.158L14.179 11.7395C13.7974 11.3601 13.2789 11.1506 12.7408 11.1582C12.2028 11.1658 11.6905 11.3899 11.3197 11.7799L12.7691 13.158ZM22.1935 22.5249L20.7836 23.9434C21.1722 24.3297 21.7023 24.5396 22.25 24.5241C22.7977 24.5086 23.315 24.2691 23.6812 23.8615L22.1935 22.5249ZM22.8618 21.781L24.3496 23.1177C25.0616 22.3251 25.0273 21.1135 24.2717 20.3625L22.8618 21.781ZM20.4883 2.13647L12.008 11.0559L14.9069 13.8121L23.3872 4.89263L20.4883 2.13647ZM19.7993 4.1679L20.4883 4.89263L23.3872 2.13647L22.6982 1.41175L19.7993 4.1679ZM14.1984 13.1079L22.6982 4.1679L19.7993 1.41175L11.2995 10.3517L14.1984 13.1079ZM2.60324 4.46578L11.3391 13.1483L14.1588 10.3113L5.423 1.62872L2.60324 4.46578ZM4.83255 5.12777L5.50087 4.38389L2.52538 1.71061L1.85706 2.45448L4.83255 5.12777ZM13.4705 11.0353L4.75468 2.37259L1.93492 5.20965L10.6507 13.8723L13.4705 11.0353ZM4.36083 23.4549L13.5101 13.8319L10.6112 11.0757L1.46193 20.6988L4.36083 23.4549ZM5.04986 21.4235L4.36082 20.6988L1.46193 23.4549L2.15097 24.1797L5.04986 21.4235ZM11.3197 11.7799L2.15097 21.4235L5.04986 24.1797L14.2186 14.5361L11.3197 11.7799ZM23.6034 21.1064L14.179 11.7395L11.3593 14.5765L20.7836 23.9434L23.6034 21.1064ZM21.3741 20.4444L20.7057 21.1883L23.6812 23.8615L24.3496 23.1177L21.3741 20.4444ZM12.0476 13.8526L21.4519 23.1996L24.2717 20.3625L14.8674 11.0155L12.0476 13.8526Z"
                fill="#4B5563"
              />
            </svg>

            {images[website]}
          </div>
          <div
            className="font-bold text-6xl text-center"
            style={{ color: colors.title }}
          >
            {title || 'Hey'}
          </div>
          <img
            src="/sb-logo.png"
            alt="stackblocks logo"
            width={164}
            height={62}
          />
        </div>
      </div>
      {/* <div className="flex flex-col justify-between h-full p-[0.8125em]">
        <div className="relative">
          <div
            className={`font-title ${font_style} line-clamp-2 overflow-ellipsis`}
            style={{ color: colors.title }}
          >
            {title || ''}
          </div>
          <div
            className="font-description font-sans line-clamp-3"
            style={{ color: colors.meta }}
          >
            {description || ''}
          </div>
        </div>
        <div
          className="flex font-meta font-sans"
          style={{ color: colors.meta }}
        >
          <div className="flex-1">{left_meta || ''}</div>
          <div className="flex-1 text-right">{right_meta || ''}</div>
        </div>
      </div> */}
    </div>
  );
};

export default OGPreview;
