import React from 'react';

import { HighLightCard } from '../../componentes/HighLightCard';
import { TransactionCard, TransactionCardProps } from '../../componentes/TransactionCard';

import { 
  Container, 
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLightCards,
  Transactions,
  Title,
  TransactionList,

} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
  {
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de site",
    amount: "R$ 12.000,00",
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: "13/04/2021",
  },
  {
    id: '2',
    type: 'negative',
    title: "Hamburgueria Pizzy",
    amount: "R$ 59,00",
    category: {
      name: 'Alimentação',
      icon: 'coffee',
    },
    date: "10/04/2021",
  },
  {
    id: '3',
    type: 'negative',
    title: "Aluguel de apartamento",
    amount: "R$ 1.2000,00",
    category: {
      name: 'Casa',
      icon: 'home',
    },
    date: "10/04/2021",
  }
];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/47599339?v=4}'}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Tiago</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HighLightCards>
        <HighLightCard 
          type="down"
          title="Entradas" 
          amount="R$ 17.000,00" 
          lastTransaction="A última entrada dia 13 de abril"
        />
        <HighLightCard 
          type="up"
          title="Saídas" 
          amount="R$ 1.259,00" 
          lastTransaction="A última saída dia 03 de abril"
        />
        <HighLightCard 
          type="total"
          title="Total" 
          amount="R$ 16.141,00" 
          lastTransaction="01 a 16 de abril"
        />
      </HighLightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
        
      </Transactions>
    </Container>  
  )
}