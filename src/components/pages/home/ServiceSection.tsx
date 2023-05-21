import {
  ImDisplay,
  GiCutDiamond,
  BsPiggyBank,
  GiMaterialsScience,
  IoNewspaperOutline,
  SlPlane,
  GoTools,
  RxTimer,
  HiCubeTransparent
} from 'react-icons/all'
import PageWidth from '~/components/layout/PageWidth'

interface ServiceProps {
  heading: string
  subHeading: string
  services: {
    name: string
    description: string
  }[]
}

const icons = [
  <GiCutDiamond className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <ImDisplay className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <BsPiggyBank className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <GiMaterialsScience className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <IoNewspaperOutline className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <SlPlane className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <GoTools className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <RxTimer className='h-8 basis-8 grow-0 shrink-0 text-primary' />,
  <HiCubeTransparent className='h-8 basis-8 grow-0 shrink-0 text-primary' />
]

const ServiceSection = ({ services, heading, subHeading }: ServiceProps) => {
  return (
    <section className='bg-gray-50 py-16'>
      <PageWidth className='flex flex-col items-center justify-center gap-10'>
        <h1 className='font-bold text-3xl'>{heading}</h1>
        <div className="w-[100px] h-1 bg-primary"></div>
        <h4 className='text-gray-400 lg:max-w-2xl text-center'>{subHeading}</h4>
        <ul className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12'>
          {services.map(({ name, description }, index) => (
            <li className='flex items-start'>
              {icons[index]}
              <div className="flex flex-col ml-6">
                <span>{name}</span>
                <span className='text-gray-400'>{description}</span>
              </div>
            </li>
          ))}
        </ul>
      </PageWidth>
    </section>
  )
}

export default ServiceSection