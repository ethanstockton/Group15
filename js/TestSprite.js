class TestSprite{
    constructor(pPosition ,pRotation, pScale){
        this.setPosition(pPosition);
        this.setRotation(pRotation);
        this.setScale(pScale);
        

        this.setObjectSceneGraphRoot(new TransformationNode(Matrix.createIdentity()));

        this.initialiseSceneGraph2();
    }
    getPosition(){
        return this.mPosition;
    }
    setPosition(pPosition){
        this.mPosition = pPosition;
    }

    getRotation(){
        return this.pRotation;
    }
    setRotation(pRotation){
        this.mRotation = pRotation;
    }

    getScale(){ 
        return this.mScale;
    }
    setScale(pScale){
        this.mScale = pScale;
    }

    
    getObjectSceneGraphRoot(){
        return this.mObjectSceneGraphRoot;
    }
    setObjectSceneGraphRoot(pObjectSceneGraphRoot){
        this.mObjectSceneGraphRoot = pObjectSceneGraphRoot;
    }

    
initialiseSceneGraph2(){

    var ObjectTranslate = Matrix.createTranslation(this.mPosition);
    var ObjectRotate = Matrix.createRotation(this.mRotation);
    var ObjectScale = Matrix.createScale(this.mScale);
    var SceneGraphNodeObjectTranslate = new TransformationNode(ObjectTranslate);
    var SceneGraphNodeObjectRotate = new TransformationNode(ObjectRotate);
    var SceneGraphNodeObjectScale = new TransformationNode(ObjectScale);

    this.mObjectSceneGraphRoot.addChild(SceneGraphNodeObjectTranslate);

    SceneGraphNodeObjectTranslate.addChild(SceneGraphNodeObjectRotate);
    SceneGraphNodeObjectRotate.addChild(SceneGraphNodeObjectScale);

    //create the translations for each sub object
    var translateSprite = new TransformationNode(Matrix.createTranslation(new Vector(0,0,1)));
    var ScaleSprite = new TransformationNode(Matrix.createScale(new Vector(1,1,1)));
    translateSprite.addChild(ScaleSprite);

    var testimage = new Image();
            testimage.src = 'js/images/RickwithDavid2.png';

            

    ScaleSprite.addChild(new Geometry(new Sprite("animated",testimage,12,19)));
    SceneGraphNodeObjectScale.addChild(translateSprite);


    
}

}