import { useDeviceSize } from "../../hooks/Responsive";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form"
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../language/type-i18n";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { t } = useTranslation<TranslationKeys>();
  const { isDesktop, isMobileOrTablet } = useDeviceSize();
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return <section id="Contact">
    {isMobileOrTablet && <h1 style={{ fontSize: 40, fontWeight: 700 }} className="text-center my-5">{t('contact.title' as TranslationKeys)}</h1>}
    {isMobileOrTablet && (
      <form className="mx-7 md:grid md:grid-cols-2 md:gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            {t('contact.form.field1.name' as TranslationKeys)}
          </label>
          <input
            {...register('name')}
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight md:bg-gray-100"
            id="name"
            type="text"
            placeholder={t('contact.form.field1.placeholder' as TranslationKeys)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            {t('contact.form.field2.name' as TranslationKeys)}
          </label>
          <input
            {...register('email')}
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight md:bg-gray-100"
            id="email"
            type="email"
            placeholder={t('contact.form.field2.placeholder' as TranslationKeys)}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="subject">
            {t('contact.form.field3.name' as TranslationKeys)}
          </label>
          <input
            {...register('subject')}
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight md:bg-gray-100"
            id="subject"
            type="text"
            placeholder={t('contact.form.field3.placeholder' as TranslationKeys)}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
            {t('contact.form.field4.name' as TranslationKeys)}
          </label>
          <textarea
            {...register('message')}
            className="outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight resize-none md:bg-gray-100"
            id="message"
            rows={4}
            placeholder={t('contact.form.field4.placeholder' as TranslationKeys)}
          ></textarea>
        </div>
        <div className="text-center justify-center flex md:col-span-2">
          <button className="bg-[#2C2949] hover:bg-gray-600 text-white py-4 px-8 rounded-xl md:text-[21px] md:rounded-[20px] md:px-12">
            {t('contact.form.buttonAction' as TranslationKeys)}
          </button>
        </div>
        <div>
        </div>
      </form>
    )}

    {isDesktop && <div
      style={{ borderRadius: 32, background: "#EBEBEB", boxShadow: "0px 8.61667px 25.85px 0px rgba(0, 0, 0, 0.25)" }}
      className="mt-24 mx-8 px-6 py-8 flex -mb-20 gap-6 xl:mx-20">
      <section className="p-8 rounded" style={{ color: 'white', maxWidth: '435px', background: 'linear-gradient(145deg, #2C2949 -7.9%, #201E34 120.55%)', borderRadius: 21 }}>
        <h1 style={{ fontSize: 25, fontWeight: 700 }} className="mb-4">{t('contact.title' as TranslationKeys)}</h1>
        <p style={{ fontSize: 15, fontWeight: 400 }} className="mb-4">{t('contact.description' as TranslationKeys)}</p>

        <div className="flex my-8">
          <div className="flex items-center">
            <FaPhoneAlt className="m-5" />
          </div>
          <div className="flex flex-col">
            <p className="mb-2" style={{ fontSize: 15, fontWeight: 400, textDecorationLine: 'underline' }}>
              {t('contact.numberPhoneOne' as TranslationKeys)}
            </p>
            <p className="mb-0" style={{ fontSize: 15, fontWeight: 400, textDecorationLine: 'underline' }}>
              {t('contact.numberPhoneTwo' as TranslationKeys)}
            </p>
          </div>
        </div>

        <div className="flex my-8">
          <div className="flex items-center">
            <FaMapMarkerAlt className="m-5" />
          </div>
          <div className="flex flex-col">
            <p style={{ fontSize: 15, fontWeight: 400 }} className="mb-0">{t('contact.address' as TranslationKeys)}</p>
          </div>
        </div>

        <p style={{ fontSize: 15, fontWeight: 400 }} className="mb-3 text-center">{t('contact.social' as TranslationKeys)}</p>
        <div className="flex justify-center">
          <FaFacebook className="mr-3" />
          <IoLogoInstagram />
        </div>
      </section>

      <form className="max-w-5xl md:grid md:grid-cols-2 md:gap-4 flex-1 xl:ml-40">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="name">
            {t('contact.form.field1.name' as TranslationKeys)}
          </label>
          <input
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="name"
            type="text"
            placeholder={t('contact.form.field1.placeholder' as TranslationKeys)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            {t('contact.form.field2.name' as TranslationKeys)}
          </label>
          <input
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="email"
            type="email"
            placeholder={t('contact.form.field2.placeholder' as TranslationKeys)}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
            {t('contact.form.field3.name' as TranslationKeys)}
          </label>
          <input
            className="border-b border-gray-500 outline-none focus:border-gray -600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight"
            id="email"
            type="email"
            placeholder={t('contact.form.field3.placeholder' as TranslationKeys)}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
            {t('contact.form.field4.name' as TranslationKeys)}
          </label>
          <textarea
            className="outline-none focus:border-blue-600 bg-transparent py-2 px-4 w-full text-gray-700 leading-tight resize-none"
            id="message"
            rows={4}
            placeholder={t('contact.form.field4.placeholder' as TranslationKeys)}
          ></textarea>
        </div>
        <div className="text-center flex md:col-span-2">
          <button className="bg-[#2C2949] hover:bg-gray-600 text-white py-4 px-8 rounded rounded-xl">
            {t('contact.form.buttonAction' as TranslationKeys)}
          </button>
        </div>
        <div>
        </div>
      </form>
    </div>}

  </section>
}

export default Contact