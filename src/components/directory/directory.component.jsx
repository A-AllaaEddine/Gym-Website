import React from "react";
import SubItems from '../sub-items/sub-items.component';

import { connect } from "react-redux";
import { selectDirectorySubs } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from "reselect";

import './directory.styles.scss';

const Directory = ({ subs }) => (
    <div className="directory">
        {
               subs.map(( sub ) => (
                   <SubItems key={sub.id} sub={sub} />
             ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    subs: selectDirectorySubs
})

export default connect(mapStateToProps)(Directory);