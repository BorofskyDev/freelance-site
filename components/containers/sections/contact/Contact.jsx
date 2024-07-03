import SectionContainer from "../../layout-containers/section-container/SectionContainer";
import ContactBottomContainer from "./contact-bottom-container/ContactBottomContainer";
import ContactTopContainer from "./contact-top-container/ContactTopContainer";

export default function Contact() {
    return (
        <SectionContainer id={'contact'}>
            <ContactTopContainer />
            <ContactBottomContainer />
        </SectionContainer>
    )
}