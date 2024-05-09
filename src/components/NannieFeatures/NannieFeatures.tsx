type NannieFeaturesPropsType = {
  title: string;
  text: string | number | string[];
};

export const NannieFeatures = ({ title, text }: NannieFeaturesPropsType) => {
  return (
    <div>
      <p>
        {title} <span>{text}</span>
      </p>
    </div>
  );
};
