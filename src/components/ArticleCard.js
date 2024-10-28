import React from "react";

const handleCardClick = () => {
    window.open("https://www.redbullracing.com/int-en/races/singapore-grand-prix-2024", "_blank");
};

// Since it's a small component, styles were defined here.
const styles = {
    card: {
        width: "310px",
        height: "412px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Steradian TRIAL, sans-serif",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: `
      0px 8px 12px 0px rgba(0, 15, 30, 0.04),
      0px 2px 4px 0px rgba(0, 15, 30, 0.02)
    `,
        cursor: "pointer"
    },
    imageContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    playButton: {
        position: "absolute",
        top: "16px",
        right: "16px",
        padding: "8px",
        zIndex: 2,
    },
    svg: {
        width: "12.42px",
        height: "14.18px",
    },
    content: {
        position: "relative",
        zIndex: 3,
        padding: "20px 25px 22px 30px",
        background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
    },
    title: {
        fontSize: "18px",
        fontWeight: 450,
        margin: "0 0 20px 0",
        textAlign: "left"
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tag: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
    },
    readTime: {
        fontSize: "12px"
    },
};

const ArticleCard = ({ backgroundImage, title, tag, readTime, playButtonSvg }) => {
    return (
        <div
            role="button"
            style={{ ...styles.card, backgroundImage: `url(${backgroundImage})` }}
            onClick={handleCardClick}
        >
            <div style={styles.imageContainer}>
                <div style={styles.playButton}>
                    <img src={playButtonSvg} alt="Play Button" style={styles.svg} />
                </div>
            </div>
            <div style={styles.content}>
                <h3 style={styles.title}>{title}</h3>
                <div style={styles.footer}>
                    <span style={styles.tag}>{tag}</span>
                    <span style={styles.readTime}>{readTime}</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
