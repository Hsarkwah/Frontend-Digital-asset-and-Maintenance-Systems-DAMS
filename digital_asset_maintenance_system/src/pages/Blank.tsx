

function BlankPage({title = 'Blank Page'}: Readonly<{title?: string}>){
    return (
        <div style={{
            display: 'flex',
            //  background: 'Orange', 
             justifyContent: 'center', 
             alignItems: 'center', 
             height: '100%'}}>
            This is the {title} page 
        </div>
    )
}

export default BlankPage;
