import { useSelector } from "react-redux";
import { selectAccounts } from "../../features/api/mockapiSlice";
import AccountItem from "../../components/AccountItem";

export default function Accounts() {
    const accounts = useSelector(selectAccounts);

    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account) => (
                <AccountItem
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </>
    );
}
