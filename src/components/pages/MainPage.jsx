import { Header } from '../layout/Header/Header';
import { MainSection } from '../layout/MainSection/MainSection';
import { BrandsBlock } from '../layout/BrandsBlock/BrandsBlock';
import { PlanAndManage } from '../layout/PlanAndManage/PlanAndManage';
import { AboutApp } from '../layout//AboutApp/AboutApp';
import { NumberUsers } from '../layout/NumberUsers/NumberUsers';
import { OurResources } from '../layout/OurResources/OurResources';
import { Quotes } from '../layout/Quotes/Quotes';
import { CustomerHelp } from '../layout/CustomerHelp/CustomerHelp';
import { GetStarted } from '../layout/GetStarted/GetStarted';
import { SignUp } from '../layout/SignUp/SignUp';
import { Footer } from '../layout/Footer/Footer';

export const MainPage = () => {
    return (
        <>
            <Header />
            <MainSection />
            <BrandsBlock />
            <PlanAndManage />
            <AboutApp />
            <NumberUsers />
            <OurResources />
            <Quotes />
            <CustomerHelp />
            <GetStarted />
            <SignUp />
            <Footer />
        </>
    )
}