import React from 'react';

const Blogs = () => {
    return (
        <section className="my-5 py-3">
            <div className="container">
                <div className="wrapper mx-auto w-50 shadow-lg rounded p-4">
                    <div className="box my-4">
                        <h2>Difference between authorization and authentication?</h2>
                        <p>Authorization is the process of verifying what resources a user can access.On the other hand, Authentication is the process of verifying the identity of a user.Authentication needs usually the user’s login details and it works for whether the person is user or not.But Authorization determines What permission do user has</p>
                    </div>
                    <div className="box my-4">
                        <h2>Why are you using Firebase?</h2>
                        <p>Firebase offers many features that pitch it as the go - to backend development tool for the web.it’s simple, lightweight, and friendly.Firebase is a less technical and time - saving alternative to writing full - fledged backend code for the web.As a Google Cloud service, it also gives us access to other Google products and features, like Google Drive and Sheets.We can import dummy data from Google Sheets and use it temporarily to serve the web.
                            Use migrate users from another Firebase project. Optimization for speedy and efficient bulk import operations. This operation processes users without checking for  or email phone-number other identifier duplication. Ability to migrate existing or create new OAuth users and import users with custom claims directly in bulk.
                        </p>
                    </div>
                    <div className="box my-4">
                        <h2>what other services does firebase provide other then authentication?</h2>
                        <p>Besides authentication Firebase provides Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions Cloud Messaging, Dynamic Links, and Remote Config.Firebase is a great tool to implement notifications, it provides custom domain names.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;