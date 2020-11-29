import React, { Component } from 'react'
import { connect } from 'react-redux'

export const MainView = () => {
    return (
        <div>
            <table></table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
