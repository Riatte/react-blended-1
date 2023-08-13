import { formateDate } from 'service/date';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ transHistory }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {transHistory.map((item, i) => (
          <Tr key={item.id}>
            <Td>{i + 1}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{formateDate(item.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
