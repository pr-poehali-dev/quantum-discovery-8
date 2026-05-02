export default function Featured() {
  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Wedding details"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <p className="text-2xl lg:text-3xl mb-4 text-neutral-900 italic">Дорогой гость!</p>
        <p className="text-base lg:text-lg mb-8 text-neutral-600 leading-relaxed">
          Мы рады сообщить Вам, что состоится самое главное торжество в нашей жизни — день нашей свадьбы!
          Приглашаем Вас разделить с нами радость этого незабываемого дня.
        </p>
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Церемония регистрации</h3>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-wide pt-1 w-20 shrink-0">Дата</span>
            <span className="text-neutral-900 text-base">20 июня 2026 года</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-wide pt-1 w-20 shrink-0">Время</span>
            <span className="text-neutral-900 text-base">15:40 — просим прийти заранее</span>
          </div>
          <div className="flex items-start gap-3" id="location">
            <span className="text-neutral-400 uppercase text-xs tracking-wide pt-1 w-20 shrink-0">Место</span>
            <span className="text-neutral-900 text-base">ЗАГС №1</span>
          </div>
        </div>
      </div>
    </div>
  );
}