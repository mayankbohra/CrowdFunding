import styled from "styled-components";
import FormLeftWrapper from './components/FormLeftWrapper';
import FormRightWrapper from './components/FormRightWrapper';
import { createContext, useState } from "react";

const FormState = createContext();

const Form = () => {
  const [form, setForm] = useState({
    campaignTitle: "",
    story: "",
    requiredAmount: "",
    category: "Education",
  });
  
  const FormHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const [image, setImage] = useState(null);
  
  const ImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const [storyUrl, setStoryUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  return (
    <FormState.Provider value={{form, setForm, image, setImage, FormHandler, ImageHandler, setImageUrl, setStoryUrl}}>
      <FormWrapper>
        <FormMain>
          <FormInputsWrapper>
            <FormLeftWrapper />
            <FormRightWrapper />
          </FormInputsWrapper>
        </FormMain>
      </FormWrapper>
    </FormState.Provider>
  )
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormMain = styled.div`
  width: 80%;
`;

const FormInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
`;

export default Form;
export { FormState };
