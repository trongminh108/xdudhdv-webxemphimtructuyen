import React from 'react';

import './sidebarComment.scss';
import Comment from '@/app/components/comment/comment';

function SidebarComment() {
    return (
        <div className="sidebarCommentContainer p-3">
            <h5 className="text-white fw-bold">Bình luận về phim</h5>
            <div className="comment-list">
                <Comment avatar="" name="Incognito 1" content="Good!" />
                <Comment avatar="" name="Incognito 1" content="Great!" />
                <Comment avatar="" name="Incognito 1" content="Excellent!" />
                <Comment avatar="" name="Incognito 1" content="fascinating!" />
                <Comment avatar="" name="Incognito 1" content="boring!" />
                <Comment avatar="" name="Incognito 1" content="very serious!" />
            </div>
        </div>
    );
}

export default SidebarComment;
