export default function AddSpecies() {
    return (
        <div className="container-login100">
            <form>
                <div >
                    <h3>In botany, a tree is a perennial plant with an elongated stem, or trunk. Usually supporting branches and leaves. </h3>

                    <div className="container-login100">
                        <label htmlFor="name" className="txt4">Species Name:</label>
                        <input className="input50" type="text" name="name" placeholder="Name" />
                    </div>

                    <div className="container-login100">
                        <label htmlFor="family" className="txt4">Family:</label>
                        <input className="input50" type="text" name="family" placeholder="Family" />
                    </div>

                    <div className="container-login100">
                        <label htmlFor="height" className="txt4">Height:</label>
                        <input className="input50" type="text" name="height" placeholder="Height" />
                    </div>

                    <div className="container-login100">
                        <label htmlFor="exposure" className="txt4">Exposure:</label>
                        <input className="input50" type="text" name="exposure" placeholder="Exposure" />
                    </div>

                    <div className="container-login100">
                        <label htmlFor="soil" className="txt4">Soil:</label>
                        <input className="input50" type="text" name="soil" placeholder="Soil" />
                    </div>

                    <div className="container-login100">
                        <label htmlFor="foliage" className="txt4">Foliage:</label>
                        <input className="input50" type="text" name="foliage" placeholder="Foliage" />
                    </div>

                    <div className="container-login100">
                        <label htmlFor="more" className="txt4">More:</label>
                        <input className="input50" type="text" name="more" placeholder="Tell us something interesting..." />
                    </div>

                    <div className="container-login100-form-btn">
                        <button className="login50-form-btn">
                            Add Species
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}
