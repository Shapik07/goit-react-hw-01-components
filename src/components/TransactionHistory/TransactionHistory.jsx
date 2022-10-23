import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TableString,
  TableTitleString,
  Tbody,
  TableCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <Thead>
        <TableString>
          <TableTitleString>Type</TableTitleString>
          <TableTitleString>Amount</TableTitleString>
          <TableTitleString>Currency</TableTitleString>
        </TableString>
      </Thead>
      {items.map(({ id, type, amount, currency }) => (
        <Tbody key={id}>
          <TableString>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableString>
        </Tbody>
      ))}
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
