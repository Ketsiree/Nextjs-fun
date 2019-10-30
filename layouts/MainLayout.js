import Link from 'next/link';

const MainLayout = props => {

    return (
        <div className='container'>
            <div className='topbar'>
                <div className='logo-container'>
                    <Link herf='/'>
                        <a className='link'>STOCK</a>
                    </Link>
                </div>
                <div className='menu-container'>
                    <div>
                        <Link href='/product'>
                            <a className='link'>Product</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/manage'>
                            <a className='link'>Manage</a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/profile'>
                            <a className='link'>Profile</a>
                        </Link>
                    </div>

                </div>
            </div>
            <div className='content'>
                {props.children}
            </div>
            <style jsx global>{`
        @font-face{
            font-family: ZCOOL;
            src: url(/static/fonts/ZCOOLXiaoWei-Regular.ttf);
            font-weight: 400;
        }
         body{
            margin:0;
            font-family: 'ZCOOL';
            }
        `}</style>
            <style jsx>{` 
               .topbar{
                   display:flex;
                   flex-direction:row;
                   justify-content: space-between;
                   align-items: center;
                   height: 32px;
                   background-color:black;
                   padding:0px 40px;
                   box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;
               }
               .menu-container{
                   display:flex;
               }
               .menu-container div {
                   margin-left: 20px;
                   text-decoration:none;
               }
               .link{
                    text-decoration:none;
                    color: white;
               }
            `}</style>

        </div>
    )
}


export default MainLayout;