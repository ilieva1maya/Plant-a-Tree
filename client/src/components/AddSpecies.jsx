export default function AddSpecies() {

    const createGameSubmitHandler = async (e) => {
        e.preventDefault();

        const speciesData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(speciesData)
    }

    return (

        <div id="create-page" className="auth">
            <form onSubmit={createGameSubmitHandler}>
                <div className="container-add">

                    <h3>In botany, a tree is a perennial plant with an elongated stem, or trunk. Usually supporting branches and leaves. </h3>

                    <label htmlFor="name" className="txt4">Species Name:</label>
                    <input className="input100" type="text" name="name" placeholder="Name" />

                    <label htmlFor="family" className="txt4">Family:</label>
                    <input className="input100" type="text" name="family" placeholder="Family" />

                    <label htmlFor="height" className="txt4">Height:</label>
                    <input className="input100" type="text" name="height" placeholder="Height" />

                    <label htmlFor="exposure" className="txt4">Exposure:</label>
                    <input className="input100" type="text" name="exposure" placeholder="Exposure" />

                    <label htmlFor="soil" className="txt4">Soil:</label>
                    <input className="input100" type="text" name="soil" placeholder="Soil" />

                    <label htmlFor="foliage" className="txt4">Foliage:</label>
                    <input className="input100" type="text" name="foliage" placeholder="Foliage" />

                    <label htmlFor="more" className="txt4">More:</label>
                    <input className="input100" type="text" name="more" placeholder="Tell us something interesting..." />

                    <button className="login100-form-btn">
                        Add Species
                    </button>

                </div>
            </form>
        </div>
    )
}
