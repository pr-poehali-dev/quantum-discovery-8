export default function Featured() {
  return (
    <div id="details" className="flex flex-col lg:flex-row lg:justify-between lg:items-start min-h-screen px-6 py-12 lg:py-16 bg-white gap-12">
      <div className="flex-1 flex flex-col gap-4">
        <img
          src="https://cdn.poehali.dev/projects/fc32a580-6549-41a8-90ed-5bd555726de8/bucket/c17f6787-3e1b-4eaf-b77a-044f9b9f464c.png"
          alt="Полина и Андрей"
          className="w-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <img
            src="https://cdn.poehali.dev/projects/fc32a580-6549-41a8-90ed-5bd555726de8/bucket/111a2bda-b66b-4633-a74e-3b23cdeefdd3.png"
            alt="Андрей"
            className="w-full h-64 object-cover object-top"
          />
          <p className="text-xs uppercase tracking-widest text-neutral-500 text-center">Андрей</p>
        </div>
        <div className="flex flex-col gap-2">
          <img
            src="https://cdn.poehali.dev/projects/fc32a580-6549-41a8-90ed-5bd555726de8/bucket/75c82715-c002-4768-a95a-867554c22c70.png"
            alt="Полина"
            className="w-full h-64 object-cover object-top"
          />
          <p className="text-xs uppercase tracking-widest text-neutral-500 text-center">Полина</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center lg:sticky lg:top-16">
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
