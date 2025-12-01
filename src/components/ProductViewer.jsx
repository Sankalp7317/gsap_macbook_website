import React from 'react'

const ProductViewer = () => {
    return (
        <section id="product-viewer">
            <h2>Take a closer Look.</h2>

            <div>
                <p className="info">MacBookPro 16 in Silver / Space Black</p>
                <div className="flex-center gap-5 mt-5">
                    <div className="color-control">
                        <div className="bg-neutral-300"/>
                        <div className="bg-neutral-900"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProductViewer
