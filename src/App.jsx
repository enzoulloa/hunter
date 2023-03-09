import Header from './layout/Header'
import Main from './layout/Main'
import Footer from './layout/Footer'
import Layout from './layout/Layout'

function App () {
  return (
    <>
      <Header />
      <Layout>
        <Main />
      </Layout>
      <Footer />
    </>
  )
}

export default App
