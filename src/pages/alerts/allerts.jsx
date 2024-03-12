import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import Links from '../../components/link/link'
import { Alert } from '@mui/material'
import './allerts.scss'
import Cumb from '../../components/breadcumb/breadcumb'

export default function Alerts() {
    return(
        <div className="alerts">
                    <Header/>
                    <Links/>
                    <Cumb title={'Alert'} sub={'alert'}/>
                    <div className="alert">
                        <h1 className="alert_heading">
                        Alert Styles
                        </h1>

                        <div className="alert_wrap">
                        <Alert severity="success">Well done! You succesfully read this message</Alert>
                        <Alert severity="info">Warning! Better check yourself.You are not looking too good</Alert>
                        <Alert severity="warning">Warning! Better check yourself.You are not looking too good
</Alert>
                        <Alert severity="error">Warning! Better check yourself.You are not looking too good
</Alert>
                        </div>

                        <div className="alert_wrap">
                        <Alert sx={{color: 'black'}} variant="outlined" severity="success">
                            This is an outlined success Alert.
                        </Alert>
                        <Alert sx={{color: 'black'}} variant="outlined" severity="info">
                            This is an outlined info Alert.
                        </Alert>
                        <Alert sx={{color: 'black'}} variant="outlined" severity="warning">
                        This is an outlined warning Alert.
                        </Alert>
                        <Alert sx={{color: 'black'}} variant="outlined" severity="error">
                            This is an outlined error Alert.
                        </Alert>
                        </div>

                        <div className="alert_wrap">
                        <Alert severity="success">Well done! You succesfully read this message</Alert>
                        <Alert severity="info">Warning! Better check yourself.You are not looking too good</Alert>
                        <Alert severity="warning">Warning! Better check yourself.You are not looking too good
</Alert>
                        <Alert severity="error">Warning! Better check yourself.You are not looking too good
</Alert>
                        </div>
                    </div>
                    <Footer/>
        </div>
    )
}