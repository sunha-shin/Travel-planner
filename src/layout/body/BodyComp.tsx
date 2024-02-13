import InputComp from '../../common/input/InputComp';
import ImgSection from '../section/ImgSection';
import InputSection from '../section/InputSection';
import OutputSection from '../section/OutputSection';

const BodyComp = () => {
  return (
    <body>
      <main>
        <ImgSection />
        <InputSection />
        <OutputSection />
      </main>
    </body>
  );
};

export default BodyComp;
