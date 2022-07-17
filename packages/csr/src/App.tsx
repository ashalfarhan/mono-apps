import {
  styled,
  TabContent,
  TabList,
  TabPannels,
  Tabs,
  TabTrigger,
} from '@acme/ui';

const Title = styled('h1', {
  fontSize: 36,
  textAlign: 'center',
  fontFamily: '$raleway',
  letterSpacing: '-4.5%',
  marginBottom: 32,
});

const AppShell = styled('div', {
  margin: '32px 0',
});

const StyledInput = styled('input', {
  flex: 1,
  padding: '20px 12px',
  borderRadius: 12,
  border: '1px solid $secondary',
  fontSize: 14,
  '&:focus': { outline: '1px solid $secondary' },
  fontFamily: 'inherit',
});

const StyledButton = styled('button', {
  padding: '20px 40px',
  fontSize: 14,
  borderRadius: 12,
  backgroundColor: '$primary',
  border: 'none',
  cursor: 'pointer',
  color: 'White',
  fontFamily: 'inherit',
  filter: 'drop-shadow(0 2px 6px #7FB1F366)',
});

function App() {
  return (
    <AppShell>
      <Title>#todo</Title>
      <Tabs defaultValue={0}>
        <TabList>
          <TabTrigger value={0} type="button" role="tab">
            All
          </TabTrigger>
          <TabTrigger value={1} type="button" role="tab">
            Active
          </TabTrigger>
          <TabTrigger value={2} type="button" role="tab">
            Completed
          </TabTrigger>
        </TabList>
        <TabPannels>
          <TabContent value={0}>
            <div>
              <form style={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                <label style={{ flex: 1, display: 'flex' }}>
                  <span hidden>Todo details</span>
                  <StyledInput type="text" placeholder="add details" />
                </label>
                <StyledButton type="submit">Add</StyledButton>
              </form>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  marginTop: 26,
                }}
              >
                <label
                  style={{ display: 'flex', alignItems: 'center', gap: 7 }}
                >
                  <input type="checkbox" name="" id="" />
                  <span>Do coding challenges</span>
                </label>
                <label
                  style={{ display: 'flex', alignItems: 'center', gap: 7 }}
                >
                  <input type="checkbox" name="" id="" />
                  <span>Do coding challenges</span>
                </label>
                <label
                  style={{ display: 'flex', alignItems: 'center', gap: 7 }}
                >
                  <input type="checkbox" name="" id="" />
                  <span>Do coding challenges</span>
                </label>
              </div>
            </div>
          </TabContent>
          <TabContent value={1}>
            <h2>Active</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
              repellendus est dolorem iure minima debitis nisi eligendi nemo
              quam. Suscipit.
            </p>
          </TabContent>
        </TabPannels>
      </Tabs>
    </AppShell>
  );
}

export default App;
