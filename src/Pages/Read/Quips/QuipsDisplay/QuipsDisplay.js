// @ts-check
import React from "react";
import { addDrupalUrlToImageTag } from "../../../../utils/addDrupalUrlToImageTag/addDrupalUrlToImageTag";
import "./QuipsDisplay.scss";

/**
 * @namespace QuipsDisplay
 * @function QuipsDisplay
 * @description A wrapper that handles rendering the quips.
 * @param {object} props The JSX props passed to this React component
 * @param {object} props.quip The quip to display in this view.
 * @param {number} props.index
 * @param {number} props.openQuip
 * @param {function} props.setOpenQuip
 * @author Alexander Burdiss
 * @since 5/27/21
 * @version 3.0.2
 * @component
 * @example
 * <QuipsDisplay quip={quip} />
 */
export default function QuipsDisplay({ quip, index, openQuip, setOpenQuip }) {
  const image = addDrupalUrlToImageTag(quip.field_main_image);
  return (
    <>
      <style>{`
        .QuipsDisplay-Container.Quip${index} {
          z-index: ${index + 1};
          animation: sendBackToSpot${index} 1s ease;
        }

        .QuipsDisplay-Container.Quip${index}.Active {
          animation: bringToFront${index} 1s ease;
          z-index: 1000;
          transform: scale(1.1);
        }

        @keyframes bringToFront${index} {
          0% {
            transform: translateY(0%) scale(1);
            z-index: ${index + 1};
          }
      
          50% {
            transform: translateY(-110%) rotate(5deg) rotateX(20deg);
            z-index: ${index + 1};
          }
          51% {
            z-index: 1000;
          }
      
          100% {
            transform: translateY(0%) scale(1.1);
            z-index: 1000;
          }
        }
      
        @keyframes sendBackToSpot${index} {
          0% {
            transform: translateY(0%) scale(1.1);
            z-index: 1000;
          }
      
          49% {
            z-index: 1000;
          }

          50% {
            transform: translateY(-110%) rotate(5deg) rotateX(20deg);
            z-index: ${index + 1};
          }
      
          100% {
            transform: translatey(0%) scale(1);
            z-index: ${index + 1};
          }
        }
      `}</style>
      <div
        className={`QuipsDisplay-Container Quip${index} ${
          openQuip === index ? "Active" : ""
        }`}
        style={{ top: index * 30 + 80 }}
      >
        <div className="QuipsInternalWrapper">
          <button
            className="QuipTitleButton"
            onClick={() => {
              if (openQuip === index) {
                setOpenQuip(undefined);
              } else {
                setOpenQuip(index);
              }
            }}
          >
            <h2>{quip.title}</h2>
          </button>
          <div className="LeftBox">
            <div dangerouslySetInnerHTML={{ __html: quip.body }} />
            {quip.field_author && (
              <div className="Author">- {quip.field_author}</div>
            )}
          </div>
          {image && (
            <div className="RightBox">
              <div dangerouslySetInnerHTML={{ __html: image }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
