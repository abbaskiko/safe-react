import { theme } from '@gnosis.pm/safe-react-components'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

// TODO: `Col` and `Row` are part of the legacy tx-table design. They will be used until the new design is implemented
import Col from 'src/components/layout/Col'
import Row from 'src/components/layout/Row'

import { TransactionSummary } from 'src/logic/safe/store/models/types/gateway'
import useStyles from 'src/routes/safe/components/Transactions/TxsTable/ExpandedTx/style'
import { IncomingTx } from './IncomingTx'

const Block = styled.div`
  border-bottom: 2px solid ${theme.colors.separator};
`

export const ExpandedGatewayTx = ({ transaction }: { transaction: TransactionSummary }): ReactElement => {
  const classes = useStyles()
  const isIncomingTx = transaction.txInfo.type === 'Transfer' && transaction.txInfo.direction === 'INCOMING'

  return (
    <Block>
      <Row>
        <Col layout="column" xs={6} className={classes.col}>
          {isIncomingTx && <IncomingTx transaction={transaction} />}
        </Col>
      </Row>
    </Block>
  )
}
