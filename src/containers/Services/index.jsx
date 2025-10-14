import ServiceItem from "../../components/ServiceItem";
import "./style.scss";

export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>

            <ServiceItem
                iconSrc="/images/icon-chat.webp"
                iconAlt="Chat Icon"
                title="You are our #1 priority"
            >
                <p>
                    Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes.
                </p>
            </ServiceItem>

            <ServiceItem
                iconSrc="/images/icon-money.webp"
                iconAlt="Money Icon"
                title="More savings means higher rates"
            >
                <p>
                    The more you save with us, the higher your interest rate will be!
                </p>
            </ServiceItem>

            <ServiceItem
                iconSrc="/images/icon-security.webp"
                iconAlt="Security Icon"
                title="Security you can trust"
            >
                <p>
                    We use top of the line encryption to make sure your data and money is
                    always safe.
                </p>
            </ServiceItem>
        </section>
    );
}
