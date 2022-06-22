import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 96vw;
  margin: 1rem 1rem 1rem 0.3rem;
  padding: 0.3rem;
  background: white;
  border-radius: 6px; ;
`;
const Para = styled.p`
  font-size: 11px;
  margin: 0.5rem;
`;
const Title = styled.p`
  font-size: 17px;
  font-weight: 400;
  margin: 0.7rem;
`;
const Summary = styled.div`
  display: block;
  @media (max-width: 600px) {
    display: ${(params) => (params.show === true ? "block" : "none")};
  }
`;
const Show = styled.button`
  width: 100%;
  border: none;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  color: orange;
  padding: 0.2rem;
  background: white;
  display: none;
  @media (max-width: 600px) {
    display: ${(params) => params.show === false && "block"};
  }
`;
const Shows = styled.button`
  width: 100%;
  border: none;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  color: orange;
  padding: 0.2rem;
  background: white;
  display: none;
  @media (max-width: 600px) {
    display: ${(params) => params.show === true && "block"};
  }
`;
const Details = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <Title>
        Online Shopping with Jumia Kenya - Africa's No 1 Online Store
      </Title>
      <Para>
        <strong> Jumia Kenya</strong> is your number one Online Shopping
        solution. You can purchase all your mobile phones, tablets, computers &
        laptops, women's fashion, men's fashion and more online and have them
        delivered to you. Jumia has payment options that suit everyone, and we
        have a payment-on-delivery option for extra convenience.
      </Para>
      <Para>
        Style with Jumia Fashion and Style, with top brands such as{" "}
        <strong>
          <u>The Arrow, Collier,</u>
        </strong>{" "}
        Curren, top quality shirts from LC Waikiki and La Sartoria. Also you get
        classy women's shoes from Eva Shoes and other amazing options. Beautify
        yourself with beauty products from Black Opal & L'OREAL. Jumia makes
        online shopping fun with our stress-free online store at affordable
        prices.
      </Para>
      <Show onClick={() => setShow(true)} show={show}>
        SHOW MORE
      </Show>
      <Summary show={show}>
        <Para>
          Be in the loop with new products and from top brands in Jumia Kenya
          and make use of our latest offers to shop at the best price guarantee!
          In our online shop, you are even able to pre-order the phones you
          want. Also take advantage of computing products available to own
          laptops, printers and other storage devices such as hard drives at
          affordable prices. Jumia remains your No°1 online marketplace for easy
          convenience and you get nothing but the best! You can now Sell online
          on Jumia to make more money with ease and convenience. List your
          products with zero fee charge and grow your business today! Jumia
          gives you a lot of flexible options to make more money. Become a sales
          consultant for JForce today with a small entrance fee, no risks, no
          boss, and marvelous rewards! with Do you fancy throwing and organizing
          parties? Discover our new service Jumia Party. Love reading? Browse
          through our books categories to order educational books for your kids
          and loved ones and get the best deal on small and large appliances for
          the home.
        </Para>
        <Para>
          Shop for smartphones Smartphones on Jumia, as we offer huge discounts
          on all mobiles, tablets and accessories. Join the biggest online sales
          event ever today. We have the latest collection of smartphones like
          the Samsung Note 9 and gadgets from the best brands in the industry
          such as Tecno, Infinix, Samsung, Huawei, Oppo, HTC and much more.
        </Para>
        <Title>
          Shop Furniture, Fashion, Electronics, Appliances & more on Jumia Kenya
        </Title>
        <Para>
          Looking for the biggest online shopping mall in Africa? You have
          landed on the right page. Explore Jumia Kenya for all you needs
          ranging from fashion accessories to electronics such as televisions at
          the best prices online in Kenya. Discover top brands of fashion wears
          such as Zaful, Curren, Zecchino and more all available at the lowest
          prices online in Kenya. Dear ladies, keep slaying with amazing beauty
          accessories and products on Jumia. Keep your skin smooth and fresh
          with top beauty product brands such as LA Colors, LA Girl, Mary Kay,
          Maybelline and much more available on the number one online shopping
          mall in Kenya. Tech and gadget lovers are not left out. Enjoy maximum
          comfort in your home by placing order for quality home appliances from
          the manufacturers such as Bruhum, Ramtons, Von Hotpoint.
        </Para>
        <Para>
          Jumia Kenya offers deals and discounts and never ceases to form
          campaigns all year around, all for the satisfaction and joy of our
          customers. Our newsletter subscribers and Facebook fans get to know
          all of our offers before anyone else such as Mobile & Tech Week,
          Ramadan, Jumia Anniversary, and Black Friday.
        </Para>
      </Summary>
      <Shows onClick={() => setShow(false)} show={show}>
        Show Less
      </Shows>
    </Container>
  );
};

export default Details;
