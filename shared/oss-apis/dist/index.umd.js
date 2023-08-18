!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@herodotus/core")):"function"==typeof define&&define.amd?define(["exports","@herodotus/core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@herodotus/oss-apis"]={},e.HerodotusCore)}(this,(function(e,t){"use strict";var s=Object.defineProperty,n=(e,t,n)=>(((e,t,n)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);const i=class _OssConstantService extends t.BaseService{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _OssConstantService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/constant/enums"}};n(i,"instance");let r=i;const c=class _MinioBucketSettingService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioBucketSettingService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/setting"}get(e,t=""){return this.getConfig().getHttp().get(this.getBaseAddress(),{bucketName:e,region:t})}};n(c,"instance");let o=c;const g=class _MinioChunkUploadService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioChunkUploadService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/chunk"}getChunkUploadCreateAddress(){return this.getBaseAddress()+"/create"}getChunkUploadCompleteAddress(){return this.getBaseAddress()+"/complete"}createChunkUpload(e){return this.getConfig().getHttp().post(this.getChunkUploadCreateAddress(),e)}completeChunkUpload(e){return this.getConfig().getHttp().post(this.getChunkUploadCompleteAddress(),e)}};n(g,"instance");let a=g;const u=class _MinioBucketEncryptionService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioBucketEncryptionService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/encryption"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}delete(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};n(u,"instance");let d=u;const h=class _MinioBucketPolicyService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioBucketPolicyService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/policy"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}delete(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};n(h,"instance");let l=h;const p=class _MinioBucketTagsService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioBucketTagsService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/tags"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}delete(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};n(p,"instance");let f=p;const S=class _MinioBucketQuotaService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioBucketQuotaService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/quota"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}};n(S,"instance");let b=S;const B=class _MinioBucketVersioningService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioBucketVersioningService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/versioning"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}};n(B,"instance");let A=B;const C=class _MinioObjectLockConfigurationService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioObjectLockConfigurationService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/bucket/object-lock"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}delete(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};n(C,"instance");let v=C;const k=class _MinioObjectSettingService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioObjectSettingService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/object/setting"}get(e,t){return this.getConfig().getHttp().get(this.getBaseAddress(),{bucketName:e,objectName:t})}};n(k,"instance");let O=k;const m=class _MinioObjectTagsService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioObjectTagsService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/object/tags"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}delete(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};n(m,"instance");let j=m;const M=class _MinioObjectRetentionService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioObjectRetentionService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/object/retention"}set(e){return this.getConfig().getHttp().put(this.getBaseAddress(),e)}};n(M,"instance");let H=M;const y=class _MinioObjectLegalHoldService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _MinioObjectLegalHoldService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/minio/object/legal-hold"}getEnableAddress(){return this.getBaseAddress()+"/enable"}getDisableAddress(){return this.getBaseAddress()+"/disable"}enable(e){return this.getConfig().getHttp().put(this.getEnableAddress(),e)}disable(e){return this.getConfig().getHttp().put(this.getDisableAddress(),e)}};n(y,"instance");let I=y;const _=class _BucketService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _BucketService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/bucket"}getListAddress(){return this.getBaseAddress()+"/list"}getExistsAddress(){return this.getBaseAddress()+"/exists"}doesBucketExist(e){return this.getConfig().getHttp().get(this.getExistsAddress(),{bucketName:e})}listBuckets(){return this.getConfig().getHttp().get(this.getListAddress())}createBucket(e){return this.getConfig().getHttp().post(this.getBaseAddress(),e)}deleteBucket(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}};n(_,"instance");let x=_;const w=class _ObjectService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _ObjectService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/object"}getListAddress(){return this.getBaseAddress()+"/list"}getListV2Address(){return this.getBaseAddress()+"/v2/list"}getMultiDeleteAddress(){return this.getBaseAddress()+"/multi"}listObjects(e){return this.getConfig().getHttp().get(this.getListAddress(),e)}listObjectsV2(e){return this.getConfig().getHttp().get(this.getListV2Address(),e)}delete(e){return this.getConfig().getHttp().delete(this.getBaseAddress(),e)}batchDelete(e){return this.getConfig().getHttp().delete(this.getMultiDeleteAddress(),e)}};n(w,"instance");let T=w;const L=class _ObjectStreamService extends t.Service{constructor(e){super(e)}static getInstance(e){return null==this.instance&&(this.instance=new _ObjectStreamService(e)),this.instance}getBaseAddress(){return this.getConfig().getOss()+"/oss/object/stream"}getDownloadAddress(){return this.getBaseAddress()+"/download"}getDisplayAddress(){return this.getBaseAddress()+"/display"}getUploadAddress(){return this.getBaseAddress()+"/upload"}download(e,s){return this.getConfig().getHttp().post(this.getDownloadAddress(),e,{contentType:t.ContentTypeEnum.JSON},{responseType:"blob",onDownloadProgress:s})}display(e){return this.getConfig().getHttp().post(this.getDisplayAddress(),e,{contentType:t.ContentTypeEnum.JSON},{responseType:"blob"})}upload(e,s,n){return this.getConfig().getHttp().post(this.getUploadAddress(),{bucketName:e,file:s},{contentType:t.ContentTypeEnum.JSON},{onUploadProgress:n})}};n(L,"instance");let E=L;const P=class _OssApiResources{constructor(e){n(this,"config",{}),this.config=e}static getInstance(e){return null==this.instance&&(this.instance=new _OssApiResources(e)),this.instance}getConfig(){return this.config}bucket(){return x.getInstance(this.config)}object(){return T.getInstance(this.config)}objectStream(){return E.getInstance(this.config)}constant(){return r.getInstance(this.config)}minioBucketSetting(){return o.getInstance(this.config)}minioChunk(){return a.getInstance(this.config)}minioBucketEncryption(){return d.getInstance(this.config)}minioBucketPolicy(){return l.getInstance(this.config)}minioBucketTags(){return f.getInstance(this.config)}minioBucketQuota(){return b.getInstance(this.config)}minioBucketVersioning(){return A.getInstance(this.config)}minioObjectLock(){return v.getInstance(this.config)}minioObjectSetting(){return O.getInstance(this.config)}minioObjectTags(){return j.getInstance(this.config)}minioObjectRetention(){return H.getInstance(this.config)}minioObjectLegalHold(){return I.getInstance(this.config)}};n(P,"instance");let U=P;Object.defineProperty(e,"Axios",{enumerable:!0,get:()=>t.Axios}),Object.defineProperty(e,"BaseService",{enumerable:!0,get:()=>t.BaseService}),Object.defineProperty(e,"HttpConfig",{enumerable:!0,get:()=>t.HttpConfig}),Object.defineProperty(e,"Service",{enumerable:!0,get:()=>t.Service}),e.MinioBucketEncryptionService=d,e.MinioBucketPolicyService=l,e.MinioBucketQuotaService=b,e.MinioBucketSettingService=o,e.MinioBucketTagsService=f,e.MinioBucketVersioningService=A,e.MinioChunkUploadService=a,e.MinioObjectLegalHoldService=I,e.MinioObjectLockConfigurationService=v,e.MinioObjectRetentionService=H,e.MinioObjectSettingService=O,e.MinioObjectTagsService=j,e.OssConstantService=r,e.createOssApi=(e,s,n,i)=>{const r=new t.HttpConfig(e,s,n,i);return U.getInstance(r)},Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));