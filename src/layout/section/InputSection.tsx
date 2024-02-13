import InputComp from '../../common/input/InputComp';
import Title from '../../common/title/Title';

const InputSection = () => {
  return (
    <section>
      <Title title={'Your travel itinerary'} />
      <InputComp title="Destination" placeholder="e.g., Vancouver" />
      <InputComp title="Number of nights" placeholder="e.g., 6 nights" />
      <InputComp title="Key spots to visit" placeholder="e.g., Stanley Park, Gastown" />
      <InputComp title="Car rental status" type="checkbox" />
    </section>
  );
};

export default InputSection;
