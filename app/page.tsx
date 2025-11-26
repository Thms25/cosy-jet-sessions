// Components
import Homeview from '../sections/home/home-view'

// types

// ---------------------------------------------------------------------

export default function Home() {
  const content = {
    slogan: 'Selected With Care',
    description:
      'Cosy Jet Sessions est la plateforme bruxelloise de référence pour découvrir des performances uniques dans un décor intimiste et réconfortant',
  }
  return <Homeview content={content} />
}
