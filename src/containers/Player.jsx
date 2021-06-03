import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import { Redirect } from 'react-router-dom';

import '../assets/styles/components/Player.scss';

const Player = props => {

    const { id } = props.match.params;
    // Validar si realmente hay un video ejecutandose
    const hasPlaying = Object.keys(props.playing).length > 0;

    // Transmitir un efecto que nos permita transmitir la accion
    useEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <Redirect to="/404/" /> ;
}

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);