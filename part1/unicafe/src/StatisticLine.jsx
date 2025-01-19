function StatisticLine({ header, value }) {
  return (
    <tr>
      <th style={{ textAlign: "left" }}>{header}</th>
      <td style={{ textAlign: "center" }}>{value}</td>
    </tr>
  )
}

export default StatisticLine;