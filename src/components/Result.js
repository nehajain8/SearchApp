import React from "react";

export default function Result(props) {
    return (
        <article class="c-tile">
            <a class="c-tile__link" href={props.result.url}>
            <div class="c-tile__content">
                <div class="c-tile__body">
                <p class="c-tile__title c-heading-delta u-margin-bottom-none">{props.result.title}</p>
                <p class="c-text-body">{props.result.description}</p>
                </div>
            </div>
            </a> 
        </article>
    )
}